import type { ViewProps } from "tamagui";
import type { ValidateStatus } from "./types";

const getColorForStatus = (
  status?: ValidateStatus | null
): ViewProps["backgroundColor"] => {
  switch (status) {
    case "error":
      return "$color.red10Light";
    default:
      return "$borderColor";
  }
};

export { getColorForStatus };
