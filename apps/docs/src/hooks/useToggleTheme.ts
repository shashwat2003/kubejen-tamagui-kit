import { useSchemeSetting } from "@vxrn/color-scheme";
import { Appearance } from "react-native";
import { isWeb } from "tamagui";

const schemeSettings = ["light", "dark", "system"] as const;

export default function useToggleTheme() {
  const [{ setting, scheme }, setSchemeSetting] = useSchemeSetting();

  return {
    setting,
    scheme,
    onPress: () => {
      const next =
        setting === "system"
          ? scheme === "light"
            ? "dark"
            : "light"
          : schemeSettings[(schemeSettings.indexOf(setting) + 1) % 3];

      if (!isWeb) {
        Appearance.setColorScheme(next === "system" ? scheme : next);
      }

      setSchemeSetting(next);
    },
  };
}
