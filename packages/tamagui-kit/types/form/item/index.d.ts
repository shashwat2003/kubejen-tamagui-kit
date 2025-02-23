import type { FieldProps } from "rc-field-form/es/Field";
import { type ReactNode } from "react";
import { type GroupProps, type ViewProps } from "tamagui";
import type { FeedbackIcons, Layout, ValidateStatus } from "../types";
type ItemProps<Values = any> = FieldProps<Values> & {
    layout?: Layout;
    label?: ReactNode;
    labelProps?: ViewProps;
    wrapperProps?: ViewProps;
    groupProps?: GroupProps;
    hasFeedback?: boolean | {
        icons: FeedbackIcons;
    };
    validateStatus?: ValidateStatus;
    help?: string;
    noHelper?: boolean;
};
export declare const Item: ({ layout, label, labelProps, wrapperProps, groupProps, hasFeedback, validateStatus, help, noHelper, initialValue, children, ...fieldProps }: ItemProps<any>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map