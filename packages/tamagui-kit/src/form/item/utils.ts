import type { Meta } from "rc-field-form/es/interface";
import type { SizableTextProps, ThemeProps } from "tamagui";
import type { ValidateStatus } from "../types";
import { getColorForStatus } from "../utils";

const genEmptyMeta = (): Meta => ({
  errors: [],
  warnings: [],
  touched: false,
  validating: false,
  name: [],
  validated: false,
});

const getHelperProps = (status: ValidateStatus | null): SizableTextProps => {
  switch (status) {
    case "error":
      return {
        color: getColorForStatus(status),
      };
    default:
      return {};
  }
};

/** Forked from antd
 * Get merged status by meta or passed `validateStatus`.
 */
function getStatus<DefaultValue>(
  errors: React.ReactNode[],
  warnings: React.ReactNode[],
  meta: Meta,
  defaultValidateStatus: ValidateStatus | DefaultValue,
  hasFeedback?: boolean,
  validateStatus?: ValidateStatus,
): ValidateStatus | DefaultValue {
  let status = defaultValidateStatus;

  if (validateStatus !== undefined) {
    status = validateStatus;
  } else if (meta.validating) {
    status = "validating";
  } else if (errors.length) {
    status = "error";
  } else if (warnings.length) {
    status = "warning";
  } else if (meta.touched || (hasFeedback && meta.validated)) {
    // success feedback should display when pass hasFeedback prop and current value is valid value
    status = "success";
  }
  return status;
}

const getThemePropsForStatus = (status?: ValidateStatus | null): ThemeProps => {
  const props: ThemeProps = {
    name: undefined, // keep it undefined, cause issues otherwise, tamagui documented the same for animation prop, maybe same thing happens here too
  };
  switch (status) {
    case "error":
      props.name = "error";
      break;
    case "validating":
      props.name = "warning";
  }

  return props;
};

export { genEmptyMeta, getHelperProps, getStatus, getThemePropsForStatus };
