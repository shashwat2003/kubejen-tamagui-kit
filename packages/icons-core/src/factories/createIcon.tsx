import type { IconProps as TamaguiIconProps } from "@tamagui/helpers-icon";
import { createElement, forwardRef, type JSX } from "react";
import type { Svg, SvgProps } from "react-native-svg";
import {
  isWeb,
  Stack,
  styled,
  usePropsAndStyle,
  type ColorTokens,
  type SpecificTokens,
  type ThemeKeys,
  type Tokens,
} from "tamagui";
import { withAnimated } from "./animated";

type IconSizeTokens = SpecificTokens<Tokens, "icon">;

type SvgPropsWithRef = SvgProps & {
  ref: React.ForwardedRef<Svg>;
  style?: { color?: string };
};

export type IconProps = Omit<
  Omit<TamaguiIconProps, "size" | "width" | "height">,
  "color"
> & {
  size?: IconSizeTokens | number;
  // we need the string & {} to allow strings but not lose the intellisense autocomplete
  color?: (ColorTokens | ThemeKeys | (string & {})) | null | undefined;
  Component?: React.FunctionComponent<SvgPropsWithRef>;
};

const getSize = <Val extends SpecificTokens | number>(
  val: Val,
): { width: Val; height: Val } => ({
  width: val,
  height: val,
});

// used by our usePropsAndStyle to resolve a variant
const IconFrame = styled(Stack, {
  variants: {
    size: {
      "...": getSize,
    },
  },
});

export type GeneratedIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<Svg>
>;

export function createIcon({
  name,
  getIcon,
  defaultFill,
}: {
  name: string;
  getIcon: (props: SvgPropsWithRef) => JSX.Element;
  defaultFill?: string;
}): readonly [GeneratedIcon, GeneratedIcon] {
  const Icon = forwardRef<Svg, IconProps>((propsIn, ref) => {
    const [props, style] = usePropsAndStyle(
      {
        color: defaultFill ?? (isWeb ? "currentColor" : undefined),
        size: "$icon.8",
        strokeWidth: 8,
        ...propsIn,
      },
      {
        resolveValues: "value",
        forComponent: IconFrame,
      },
    );

    const svgProps: SvgPropsWithRef = {
      style: style as unknown as SvgPropsWithRef["style"],
      ...(props as unknown as SvgPropsWithRef),
      ref,
    };

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    if ((props as any).Component) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      return createElement((props as any).Component, svgProps);
    }

    return getIcon(svgProps);
  });

  Icon.displayName = name;

  const IconPlain = forwardRef<Svg, IconProps>((props, ref) => {
    return getIcon({
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ...(props as any as SvgPropsWithRef),
      ref,
    });
  });

  IconPlain.displayName = name;

  const AnimatedIconPlain = withAnimated(IconPlain);

  const AnimatedIcon = forwardRef<Svg, IconProps>((props: IconProps, ref) => (
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    <Icon ref={ref} {...props} Component={AnimatedIconPlain as any} />
  ));

  AnimatedIcon.displayName = `Animated${name}`;

  return [Icon, AnimatedIcon] as const;
}
