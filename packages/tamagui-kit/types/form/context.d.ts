import type { FeedbackIcons, Layout, RequiredMark, ValidateStatus } from "./types";
type FormContextType = {
    feedbackIcons?: FeedbackIcons;
    layout?: Layout;
    loading?: boolean;
    requiredMark?: RequiredMark;
};
type FormItemContextType = {
    validateStatus?: ValidateStatus | null;
    initialValue?: any;
};
export declare const FormContext: import("react").Context<FormContextType>;
export declare const FormItemContext: import("react").Context<FormItemContextType>;
export declare const VariantContext: import("react").Context<Variant>;
export {};
//# sourceMappingURL=context.d.ts.map