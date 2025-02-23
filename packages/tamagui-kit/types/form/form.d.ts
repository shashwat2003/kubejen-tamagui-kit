import { type FormProps as OgFormProps } from "tamagui";
import type { FormProps } from "./types";
type InternalFormProps = FormProps & {
    componentProps?: OgFormProps;
};
export declare const InternalForm: ({ feedbackIcons, layout, disabled, loading, variant, requiredMark, componentProps, ...formProps }: InternalFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=form.d.ts.map