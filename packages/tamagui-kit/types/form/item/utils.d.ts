import type { Meta } from "rc-field-form/es/interface";
import type { SizableTextProps, ThemeProps } from "tamagui";
import type { ValidateStatus } from "../types";
declare const genEmptyMeta: () => Meta;
declare const getHelperProps: (status: ValidateStatus | null) => SizableTextProps;
/** Forked from antd
 * Get merged status by meta or passed `validateStatus`.
 */
declare function getStatus<DefaultValue>(errors: React.ReactNode[], warnings: React.ReactNode[], meta: Meta, defaultValidateStatus: ValidateStatus | DefaultValue, hasFeedback?: boolean, validateStatus?: ValidateStatus): ValidateStatus | DefaultValue;
declare const getThemePropsForStatus: (status?: ValidateStatus | null) => ThemeProps;
export { genEmptyMeta, getHelperProps, getStatus, getThemePropsForStatus };
//# sourceMappingURL=utils.d.ts.map