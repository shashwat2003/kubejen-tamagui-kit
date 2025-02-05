#!/usr/bin/env node

import camelcase from "camelcase";
import { load } from "cheerio";
import fsExtra from "fs-extra";
import path, { join } from "node:path";
import uppercamelcase from "uppercamelcase";
import minimist from "minimist";

const { ensureDirSync, existsSync, readFileSync, readdirSync, writeFileSync } =
  fsExtra;

// Types
interface DirectoryPair {
  input: string;
  output: string;
}

// Parse CLI arguments
const args = minimist(process.argv.slice(2), {
  string: ["input", "output"],
  boolean: ["skip-existing"],
  alias: {
    i: "input",
    o: "output",
    s: "skip-existing",
  },
});

// Validate CLI arguments
if (!args.input || !args.output) {
  console.error("Error: Both --input and --output arguments are required.");
  console.error(
    "Usage: node script.js --input <input-dir> --output <output-dir> [--skip-existing]",
  );
  process.exit(1);
}

// Main Loop
async function run(): Promise<void> {
  const skipExisting = args["skip-existing"];
  const svgDirPairs: DirectoryPair[] = [
    {
      input: args.input,
      output: args.output,
    },
  ];

  for (const dirPair of svgDirPairs) {
    await createSVGComponents(dirPair, skipExisting);
  }
}

// Logic Functions
async function createSVGComponents(
  dirs: DirectoryPair,
  skipExisting: boolean,
): Promise<void> {
  // Ensure output directory exists
  ensureDirSync(dirs.output);

  let indexFile = "";
  const fileNames = readdirSync(dirs.input).filter((name) =>
    name.endsWith(".svg"),
  );

  for (const fileName of fileNames) {
    const className = generateClassName(fileName);
    const inputPath = join(dirs.input, fileName);
    const outputPath = path.join(dirs.output, "icons", `${className}Icon.tsx`);

    // Add to index file even if it exists
    indexFile += `\nexport * from './icons/${className}Icon'`;

    if (skipExisting && existsSync(outputPath)) {
      continue;
    }

    // Generate and write file
    const svg = readFileSync(inputPath, "utf-8");
    const element = await generateSVGComponent(svg, fileName);
    if (element) {
      console.log(`💰 ${fileName}`);
      writeFileSync(outputPath, element, "utf-8");
    }
  }

  console.log("Writing index file...");
  writeFileSync(join(dirs.output, "index.ts"), indexFile, "utf-8");
}

async function generateSVGComponent(
  svg: string,
  fileName: string,
): Promise<string | undefined> {
  try {
    const element = generateSVGComponentString(svg, fileName);
    return element;
  } catch (err) {
    console.log(
      `Error converting icon: ${fileName}: ${
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (err as any).message
      }`,
    );
    return undefined;
  }
}

// Core SVG File Generation
function generateSVGComponentString(svg: string, fileName: string): string {
  const $ = load(svg, {
    xmlMode: true,
  });

  const className = generateClassName(fileName);

  // Because CSS does not exist on Native platforms
  // We need to duplicate the styles applied to the
  // SVG to its children
  const svgAttribs = $("svg")[0]?.attribs;
  // biome-ignore lint/performance/noDelete: <explanation>
  delete svgAttribs.xmlns;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const attribsOfInterest: Record<string, any> = {};

  Object.keys(svgAttribs).forEach((key) => {
    if (
      ![
        "height",
        "width",
        "viewBox",
        "fill",
        "stroke-width",
        "stroke-linecap",
        "stroke-linejoin",
      ].includes(key)
    ) {
      attribsOfInterest[key] = svgAttribs[key];
    }
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  $("*").each((_, el: any) => {
    Object.keys(el.attribs).forEach((x) => {
      if (x.includes("-")) {
        $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
      }
      if (x === "stroke") {
        $(el).attr(x, "currentColor");
      }
    });

    // For every element that is NOT svg ...
    if (el.name !== "svg") {
      Object.keys(attribsOfInterest).forEach((key) => {
        $(el).attr(camelcase(key), attribsOfInterest[key]);
      });
    }

    if (el.name === "svg") {
      $(el).attr("otherProps", "...");
    }
  });

  const parsedSvgToReact = $("svg")
    .toString()
    .replace(/ class=\"[^\"]+\"/g, "")
    .replace(/ version=\"[^\"]+\"/g, "")
    .replace(/width="[0-9]+"/, "")
    .replace(/height="[0-9]+"/, "")
    .replace("<svg", "<Svg")
    .replace("</svg", "</Svg")
    .replace(/<circle/g, "<_Circle")
    .replace(/<\/circle/g, "</_Circle")
    .replace(/<ellipse/g, "<Ellipse")
    .replace(/<\/ellipse/g, "</Ellipse")
    .replace(/<g/g, "<G")
    .replace(/<\/g/g, "</G")
    .replace(/<linear-gradient/g, "<LinearGradient")
    .replace(/<\/linear-gradient/g, "</LinearGradient")
    .replace(/<radial-gradient/g, "<RadialGradient")
    .replace(/<\/radial-gradient/g, "</RadialGradient")
    .replace(/<path/g, "<Path")
    .replace(/<\/path/g, "</Path")
    .replace(/<line/g, "<Line")
    .replace(/<\/line/g, "</Line")
    .replace(/<polygon/g, "<Polygon")
    .replace(/<\/polygon/g, "</Polygon")
    .replace(/<polyline/g, "<Polyline")
    .replace(/<\/polyline/g, "</Polyline")
    .replace(/<rect/g, "<Rect")
    .replace(/<\/rect/g, "</Rect")
    .replace(/<symbol/g, "<_Symbol")
    .replace(/<\/symbol/g, "</_Symbol")
    .replace(/<text/g, "<_Text")
    .replace(/<\/text/g, "</_Text")
    .replace(/<use/g, "<Use")
    .replace(/<\/use/g, "</Use")
    .replace(/<defs/g, "<Defs")
    .replace(/<\/defs/g, "</Defs")
    .replace(/<stop/g, "<Stop")
    .replace(/<\/stop/g, "</Stop")
    .replace(/<clipPath/g, "<ClipPath")
    .replace(/<\/clipPath/g, "</ClipPath")
    .replace(/px/g, "");

  const foundFills = Array.from(
    parsedSvgToReact.matchAll(/fill="(#[a-z0-9]+)"/gi),
  ).flat();
  const defaultFill = foundFills[1];

  return `
import React, { memo, forwardRef } from 'react'
import {
Svg,
SvgProps,
Ellipse,
G,
LinearGradient,
RadialGradient,
Line,
Path,
Polygon,
Polyline,
Rect,
Symbol as _Symbol,
Use,
Defs,
Stop,
ClipPath,
Text as _Text,
Circle as _Circle,
} from 'react-native-svg'

import { createIcon } from '@kjt/icons-core'

export const [${className}Icon, Animated${className}Icon] = createIcon({
name: '${className}',
getIcon: (props) => (
  ${parsedSvgToReact.replace('otherProps="..."', "{...props}")}
),
${defaultFill ? `defaultFill: '${defaultFill}'` : ""}
})
`
    .replace(/fill="(#[a-z0-9]+)"/gi, `fill={"currentColor" ?? '$1'}`)
    .replaceAll(`xmlns:xlink="http://www.w3.org/1999/xlink"`, "")
    .replaceAll("xlink:href", "xlinkHref");
}

// Helpers
function generateClassName(fileName: string): string {
  return uppercamelcase(path.basename(fileName, ".svg")) as string;
}

// This must be at the end to run all code
run().catch((err) => console.log(err));
