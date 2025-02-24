import { type ComponentProps, type ReactNode } from "react";
type BaseInputExtraProps = {
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
    allowClear?: boolean | {
        clearIcon: ReactNode;
    };
};
export declare const BaseInput: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("tamagui").InputExtraProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    disabled?: boolean | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    unstyled?: boolean | undefined;
    filled?: boolean | undefined;
    outlined?: boolean | undefined;
    borderless?: boolean | undefined;
    underlined?: boolean | undefined;
}>, keyof BaseInputExtraProps> & BaseInputExtraProps, import("react-native").TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("tamagui").InputExtraProps & BaseInputExtraProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    disabled?: boolean | undefined;
    size?: import("tamagui").SizeTokens | undefined;
    unstyled?: boolean | undefined;
    filled?: boolean | undefined;
    outlined?: boolean | undefined;
    borderless?: boolean | undefined;
    underlined?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
} & import("@tamagui/web").StaticConfigPublic>;
export type BaseInputProps = ComponentProps<typeof BaseInput>;
export {};
//# sourceMappingURL=input.d.ts.map