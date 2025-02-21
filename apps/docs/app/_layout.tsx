import { TamaguiRootProvider } from "@/tamagui";
import "@/tamagui/config/euclid/index.css";
import { SchemeProvider } from "@vxrn/color-scheme";
import { Slot } from "one";
import { View } from "tamagui";

/**
 * The root _layout.tsx filters <html /> and <body /> out on native
 */

export default function Layout() {
  return (
    <html lang="en-US">
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <link rel="icon" href="/favicon.svg" />
      <SchemeProvider>
        <TamaguiRootProvider>
          <View height={"100%"} width={"100%"} backgroundColor={"$background"}>
            <Slot />
          </View>
        </TamaguiRootProvider>
      </SchemeProvider>
    </html>
  );
}
