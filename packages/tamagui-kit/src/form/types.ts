import type { FormProps as RcFormProps } from "rc-field-form";
import type { Variant } from "../config-provider/variants";

export type Layout = "horizontal" | "vertical";

const _ValidateStatuses = [
  "success",
  "warning",
  "error",
  "validating",
  "",
] as const;
export type ValidateStatus = (typeof _ValidateStatuses)[number];

export type FeedbackIcons = (itemStatus: {
  status: ValidateStatus;
  errors?: React.ReactNode[];
  warnings?: React.ReactNode[];
}) => { [key in ValidateStatus]?: React.ReactNode };

export type RequiredMark =
  | boolean
  | "optional"
  | ((
      labelNode: React.ReactNode,
      info: { required: boolean },
    ) => React.ReactNode);

export type FormProps = RcFormProps & {
  feedbackIcons?: FeedbackIcons;
  layout?: Layout;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
  requiredMark?: RequiredMark;
};
