import { type ComponentProps } from "react";
import type { BaseInputExtraProps } from "./types";
export declare const BaseInput: import("tamagui").TamaguiComponent<Omit<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("tamagui").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, "rows"> & import("tamagui").InputExtraProps, keyof BaseInputExtraProps> & BaseInputExtraProps, import("react-native").TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("tamagui").InputExtraProps & BaseInputExtraProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("tamagui").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("tamagui").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
export type BaseInputProps = ComponentProps<typeof BaseInput>;
//# sourceMappingURL=base-input.d.ts.map