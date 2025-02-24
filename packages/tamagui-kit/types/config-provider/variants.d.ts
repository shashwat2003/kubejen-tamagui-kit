import { type XStackProps } from "tamagui";
export declare const Variants: readonly ["outlined", "borderless", "filled", "underlined"];
export type Variant = (typeof Variants)[number];
export type VariantStyles = {
    [key in Variant]: XStackProps;
};
export declare const resetStyles: {
    readonly borderColor: "transparent";
    readonly backgroundColor: "transparent";
    readonly focusVisibleStyle: {
        readonly outlineStyle: "none";
        readonly borderColor: "transparent";
    };
    readonly hoverStyle: {
        readonly borderColor: "transparent";
    };
    readonly borderWidth: 0;
    readonly borderRadius: "$true";
};
export declare const defaultVariantStyles: VariantStyles;
export declare const focusedVariantStyles: VariantStyles;
export declare const VariantFrame: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | null | undefined;
    variant?: "filled" | "outlined" | "borderless" | "underlined" | undefined;
    fullscreen?: boolean | undefined;
    focused?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const defaultVariantAddonStyles: VariantStyles;
export declare const focusedVariantAddonStyles: VariantStyles;
export declare const VariantAddonFrame: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | import("tamagui").SizeTokens | undefined;
    inset?: number | import("tamagui").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | null | undefined;
    variant?: "filled" | "outlined" | "borderless" | "underlined" | undefined;
    fullscreen?: boolean | undefined;
    focused?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const VariantContext: import("react").Context<"filled" | "outlined" | "borderless" | "underlined">;
//# sourceMappingURL=variants.d.ts.map