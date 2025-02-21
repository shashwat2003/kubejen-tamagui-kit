import { defaultConfig } from "@kubejen/tamagui-kit";
import { createTamagui } from "tamagui";
import { euclidConfig } from "./euclid/euclid.font";

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fonts: {
    body: euclidConfig,
  },
});

export default tamaguiConfig;
