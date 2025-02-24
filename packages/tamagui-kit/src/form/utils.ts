import type { ViewProps } from "tamagui";
import type { ValidateStatus } from "./types";

const getColorForStatus = (
  status?: ValidateStatus | null,
): ViewProps["backgroundColor"] => {
  switch (status) {
    case "error":
      return "$red10";
    default:
      return "$borderColor";
  }
};

export { getColorForStatus };
