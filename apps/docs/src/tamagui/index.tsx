import { useColorScheme } from "@vxrn/color-scheme";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./config";
import "./tamagui.css";

export const TamaguiRootProvider = ({ children }: React.PropsWithChildren) => {
  const [scheme] = useColorScheme();

  return (
    <TamaguiProvider
      disableInjectCSS
      config={tamaguiConfig}
      defaultTheme={scheme}
    >
      {children}
    </TamaguiProvider>
  );
};
