export declare const settings: {
    allowedStyleValues: "somewhat-strict-web";
    autocompleteSpecificTokens: true;
    defaultFont: string;
    fastSchemeChange: true;
    onlyAllowShorthands: false;
};
export declare const defaultConfig: {
    fonts: {
        body: {
            face?: Partial<{
                bold: {
                    normal?: string;
                    italic?: string;
                };
                normal: {
                    normal?: string;
                    italic?: string;
                };
                100: {
                    normal?: string;
                    italic?: string;
                };
                200: {
                    normal?: string;
                    italic?: string;
                };
                300: {
                    normal?: string;
                    italic?: string;
                };
                400: {
                    normal?: string;
                    italic?: string;
                };
                500: {
                    normal?: string;
                    italic?: string;
                };
                600: {
                    normal?: string;
                    italic?: string;
                };
                700: {
                    normal?: string;
                    italic?: string;
                };
                800: {
                    normal?: string;
                    italic?: string;
                };
                900: {
                    normal?: string;
                    italic?: string;
                };
            }>;
            family: string;
            size: import("./fonts/types").FontSizes;
            lineHeight: import("./fonts/types").FontSizes;
            weight: import("./fonts/types").FontSizes;
        };
    };
    themes: Record<"dark" | "light" | "light_accent" | "dark_accent" | "dark_error" | "dark_success" | "dark_warning" | "light_error" | "light_success" | "light_warning", {
        accentColor: string;
        background: string;
        borderColor: string;
        color: string;
        outlineColor: string;
        shadowColor: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow5: string;
        shadow6: string;
        colorTransparent: string;
        colorHover: string;
        colorPress: string;
        colorFocus: string;
        placeholderColor: string;
        accentBackground: string;
        background0: string;
        background02: string;
        background04: string;
        background06: string;
        background08: string;
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        color6: string;
        color7: string;
        color8: string;
        color9: string;
        color10: string;
        color11: string;
        color12: string;
        color0: string;
        color02: string;
        color04: string;
        color06: string;
        color08: string;
        backgroundHover: string;
        backgroundPress: string;
        backgroundFocus: string;
        borderColorHover: string;
        borderColorPress: string;
        borderColorFocus: string;
        accent0: string;
        accent2: string;
        accent1: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
    }>;
    animations: import("@tamagui/web").AnimationDriver<{
        "100ms": {
            type: "timing";
            duration: number;
        };
        "200ms": {
            type: "timing";
            duration: number;
        };
        "300ms": {
            type: "timing";
            duration: number;
        };
        stiff: {
            type: "spring";
            mass: number;
            damping: number;
            stiffness: number;
        };
        bouncy: {
            type: "spring";
            damping: number;
            mass: number;
            stiffness: number;
        };
        semiBouncy: {
            type: "spring";
            damping: number;
            mass: number;
            stiffness: number;
        };
        lazy: {
            type: "spring";
            damping: number;
            stiffness: number;
        };
        quick: {
            type: "spring";
            damping: number;
            mass: number;
            stiffness: number;
        };
        simple: {
            type: "timing";
            duration: number;
        };
    }>;
    tokens: {
        radius: {
            true: number;
            full: string;
            none: number;
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            "2xl": number;
            "3xl": number;
            "4xl": number;
            "5xl": number;
            "6xl": number;
            "7xl": number;
            "8xl": number;
            "9xl": number;
            "10xl": number;
            "11xl": number;
            "12xl": number;
            "13xl": number;
        };
        zIndex: {
            true: number;
            negative: number;
            background: number;
            default: number;
            mask: number;
            dropdown: number;
            sticky: number;
            fixed: number;
            modalBackdrop: number;
            offcanvas: number;
            modal: number;
            popover: number;
            tooltip: number;
        };
        space: {
            true: number;
            none: number;
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            "2xl": number;
            "3xl": number;
            "4xl": number;
            "5xl": number;
            "6xl": number;
            "7xl": number;
            "8xl": number;
            "9xl": number;
            "10xl": number;
            "11xl": number;
            "12xl": number;
            "13xl": number;
        };
        size: {
            true: number;
            none: number;
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            "2xl": number;
            "3xl": number;
            "4xl": number;
            "5xl": number;
            "6xl": number;
            "7xl": number;
            "8xl": number;
            "9xl": number;
            "10xl": number;
            "11xl": number;
            "12xl": number;
            "13xl": number;
        };
        icon: {
            true: number;
            "8": number;
            "10": number;
            "12": number;
            "14": number;
            "16": number;
            "18": number;
            "20": number;
            "22": number;
            "24": number;
            "26": number;
            "28": number;
            "30": number;
            "32": number;
            "34": number;
            "36": number;
            "38": number;
            "40": number;
            "44": number;
            "48": number;
            "64": number;
            "72": number;
            "96": number;
            "128": number;
            "156": number;
        };
    };
    media: {
        xl: {
            maxWidth: number;
        };
        lg: {
            maxWidth: number;
        };
        md: {
            maxWidth: number;
        };
        sm: {
            maxWidth: number;
        };
        xs: {
            maxWidth: number;
        };
        xxs: {
            maxWidth: number;
        };
        gtXs: {
            minWidth: number;
        };
        gtSm: {
            minWidth: number;
        };
        gtMd: {
            minWidth: number;
        };
        gtLg: {
            minWidth: number;
        };
        gtXl: {
            minWidth: number;
        };
    };
    shorthands: {
        readonly m: "margin";
        readonly mb: "marginBottom";
        readonly ml: "marginLeft";
        readonly mr: "marginRight";
        readonly mt: "marginTop";
        readonly mx: "marginHorizontal";
        readonly my: "marginVertical";
        readonly p: "padding";
        readonly pb: "paddingBottom";
        readonly pl: "paddingLeft";
        readonly pr: "paddingRight";
        readonly pt: "paddingTop";
        readonly px: "paddingHorizontal";
        readonly py: "paddingVertical";
        readonly f: "flex";
    };
    settings: {
        allowedStyleValues: "somewhat-strict-web";
        autocompleteSpecificTokens: true;
        defaultFont: string;
        fastSchemeChange: true;
        onlyAllowShorthands: false;
    };
};
export declare const config: import("tamagui").TamaguiInternalConfig<{
    radius: {
        true: number;
        full: string;
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        "2xl": number;
        "3xl": number;
        "4xl": number;
        "5xl": number;
        "6xl": number;
        "7xl": number;
        "8xl": number;
        "9xl": number;
        "10xl": number;
        "11xl": number;
        "12xl": number;
        "13xl": number;
    };
    zIndex: {
        true: number;
        negative: number;
        background: number;
        default: number;
        mask: number;
        dropdown: number;
        sticky: number;
        fixed: number;
        modalBackdrop: number;
        offcanvas: number;
        modal: number;
        popover: number;
        tooltip: number;
    };
    space: {
        true: number;
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        "2xl": number;
        "3xl": number;
        "4xl": number;
        "5xl": number;
        "6xl": number;
        "7xl": number;
        "8xl": number;
        "9xl": number;
        "10xl": number;
        "11xl": number;
        "12xl": number;
        "13xl": number;
    };
    size: {
        true: number;
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        "2xl": number;
        "3xl": number;
        "4xl": number;
        "5xl": number;
        "6xl": number;
        "7xl": number;
        "8xl": number;
        "9xl": number;
        "10xl": number;
        "11xl": number;
        "12xl": number;
        "13xl": number;
    };
    icon: {
        true: number;
        "8": number;
        "10": number;
        "12": number;
        "14": number;
        "16": number;
        "18": number;
        "20": number;
        "22": number;
        "24": number;
        "26": number;
        "28": number;
        "30": number;
        "32": number;
        "34": number;
        "36": number;
        "38": number;
        "40": number;
        "44": number;
        "48": number;
        "64": number;
        "72": number;
        "96": number;
        "128": number;
        "156": number;
    };
}, Record<"dark" | "light" | "light_accent" | "dark_accent" | "dark_error" | "dark_success" | "dark_warning" | "light_error" | "light_success" | "light_warning", {
    accentColor: string;
    background: string;
    borderColor: string;
    color: string;
    outlineColor: string;
    shadowColor: string;
    yellow1: string;
    yellow2: string;
    yellow3: string;
    yellow4: string;
    yellow5: string;
    yellow6: string;
    yellow7: string;
    yellow8: string;
    yellow9: string;
    yellow10: string;
    yellow11: string;
    yellow12: string;
    red1: string;
    red2: string;
    red3: string;
    red4: string;
    red5: string;
    red6: string;
    red7: string;
    red8: string;
    red9: string;
    red10: string;
    red11: string;
    red12: string;
    green1: string;
    green2: string;
    green3: string;
    green4: string;
    green5: string;
    green6: string;
    green7: string;
    green8: string;
    green9: string;
    green10: string;
    green11: string;
    green12: string;
    shadow1: string;
    shadow2: string;
    shadow3: string;
    shadow4: string;
    shadow5: string;
    shadow6: string;
    colorTransparent: string;
    colorHover: string;
    colorPress: string;
    colorFocus: string;
    placeholderColor: string;
    accentBackground: string;
    background0: string;
    background02: string;
    background04: string;
    background06: string;
    background08: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
    color7: string;
    color8: string;
    color9: string;
    color10: string;
    color11: string;
    color12: string;
    color0: string;
    color02: string;
    color04: string;
    color06: string;
    color08: string;
    backgroundHover: string;
    backgroundPress: string;
    backgroundFocus: string;
    borderColorHover: string;
    borderColorPress: string;
    borderColorFocus: string;
    accent0: string;
    accent2: string;
    accent1: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accent7: string;
    accent8: string;
    accent9: string;
    accent10: string;
    accent11: string;
    accent12: string;
}>, {
    readonly m: "margin";
    readonly mb: "marginBottom";
    readonly ml: "marginLeft";
    readonly mr: "marginRight";
    readonly mt: "marginTop";
    readonly mx: "marginHorizontal";
    readonly my: "marginVertical";
    readonly p: "padding";
    readonly pb: "paddingBottom";
    readonly pl: "paddingLeft";
    readonly pr: "paddingRight";
    readonly pt: "paddingTop";
    readonly px: "paddingHorizontal";
    readonly py: "paddingVertical";
    readonly f: "flex";
}, {
    xl: {
        maxWidth: number;
    };
    lg: {
        maxWidth: number;
    };
    md: {
        maxWidth: number;
    };
    sm: {
        maxWidth: number;
    };
    xs: {
        maxWidth: number;
    };
    xxs: {
        maxWidth: number;
    };
    gtXs: {
        minWidth: number;
    };
    gtSm: {
        minWidth: number;
    };
    gtMd: {
        minWidth: number;
    };
    gtLg: {
        minWidth: number;
    };
    gtXl: {
        minWidth: number;
    };
}, {
    "100ms": {
        type: "timing";
        duration: number;
    };
    "200ms": {
        type: "timing";
        duration: number;
    };
    "300ms": {
        type: "timing";
        duration: number;
    };
    stiff: {
        type: "spring";
        mass: number;
        damping: number;
        stiffness: number;
    };
    bouncy: {
        type: "spring";
        damping: number;
        mass: number;
        stiffness: number;
    };
    semiBouncy: {
        type: "spring";
        damping: number;
        mass: number;
        stiffness: number;
    };
    lazy: {
        type: "spring";
        damping: number;
        stiffness: number;
    };
    quick: {
        type: "spring";
        damping: number;
        mass: number;
        stiffness: number;
    };
    simple: {
        type: "timing";
        duration: number;
    };
}, {
    body: {
        face?: Partial<{
            bold: {
                normal?: string;
                italic?: string;
            };
            normal: {
                normal?: string;
                italic?: string;
            };
            100: {
                normal?: string;
                italic?: string;
            };
            200: {
                normal?: string;
                italic?: string;
            };
            300: {
                normal?: string;
                italic?: string;
            };
            400: {
                normal?: string;
                italic?: string;
            };
            500: {
                normal?: string;
                italic?: string;
            };
            600: {
                normal?: string;
                italic?: string;
            };
            700: {
                normal?: string;
                italic?: string;
            };
            800: {
                normal?: string;
                italic?: string;
            };
            900: {
                normal?: string;
                italic?: string;
            };
        }>;
        family: string;
        size: import("./fonts/types").FontSizes;
        lineHeight: import("./fonts/types").FontSizes;
        weight: import("./fonts/types").FontSizes;
    };
}, {
    allowedStyleValues: "somewhat-strict-web";
    autocompleteSpecificTokens: true;
    defaultFont: string;
    fastSchemeChange: true;
    onlyAllowShorthands: false;
}>;
export type Conf = typeof config;
declare module "tamagui" {
    interface TamaguiCustomConfig extends Conf {
    }
}
