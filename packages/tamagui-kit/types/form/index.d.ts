export declare const Form: (({ feedbackIcons, layout, disabled, loading, variant, requiredMark, componentProps, ...formProps }: import("rc-field-form").FormProps<any> & {
    feedbackIcons?: import("./types").FeedbackIcons;
    layout?: import("./types").Layout;
    disabled?: boolean;
    loading?: boolean;
    variant?: import("../config-provider/variants").Variant;
    requiredMark?: import("./types").RequiredMark;
} & {
    componentProps?: import("tamagui").FormProps;
}) => import("react/jsx-runtime").JSX.Element) & {
    Trigger: import("tamagui").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}>, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Item: ({ layout, label, labelProps, wrapperProps, groupProps, hasFeedback, validateStatus, help, noHelper, initialValue, children, ...fieldProps }: import("rc-field-form/es/Field").FieldProps<any> & {
        layout?: import("./types").Layout;
        label?: import("react").ReactNode;
        labelProps?: import("tamagui").ViewProps;
        wrapperProps?: import("tamagui").ViewProps;
        groupProps?: import("tamagui").GroupProps;
        hasFeedback?: boolean | {
            icons: import("./types").FeedbackIcons;
        };
        validateStatus?: import("./types").ValidateStatus;
        help?: string;
        noHelper?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
};
//# sourceMappingURL=index.d.ts.map