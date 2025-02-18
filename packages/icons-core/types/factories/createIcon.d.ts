import type { IconProps as TamaguiIconProps } from "@tamagui/helpers-icon";
import { type JSX } from "react";
import type { Svg, SvgProps } from "react-native-svg";
import { type ColorTokens, type SpecificTokens, type ThemeKeys, type Tokens } from "tamagui";
type IconSizeTokens = SpecificTokens<Tokens, "icon">;
type SvgPropsWithRef = SvgProps & {
    ref: React.ForwardedRef<Svg>;
    style?: {
        color?: string;
    };
};
export type IconProps = Omit<Omit<TamaguiIconProps, "size" | "width" | "height">, "color"> & {
    size?: IconSizeTokens | number;
    color?: (ColorTokens | ThemeKeys | (string & {})) | null | undefined;
    Component?: React.FunctionComponent<SvgPropsWithRef>;
};
export type GeneratedIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Svg>>;
export declare function createIcon({ name, getIcon, defaultFill, }: {
    name: string;
    getIcon: (props: SvgPropsWithRef) => JSX.Element;
    defaultFill?: string;
}): readonly [GeneratedIcon, GeneratedIcon];
export {};
//# sourceMappingURL=createIcon.d.ts.map