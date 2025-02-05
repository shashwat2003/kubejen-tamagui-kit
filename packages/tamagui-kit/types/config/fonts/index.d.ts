import type { FontConfig, FontSizes, PlatformSpecificFont } from "./types";
/**
 * Creates a font configuration object based on the provided platform-specific font configuration
 * and optional size configuration. The font tokens follow tailwind's format e.g. xs, sm, base, lg, etc. (https://tailwindcss.com/docs/font-size)
 *
 * @param params.platformFontConfig - The platform-specific font configuration.
 * @param [params.sizeConfig] - Optional size configuration. If not provided, a default configuration will be used.
 * @returns The created font configuration object.
 */
export declare const createFont: ({ platformFontConfig, sizeConfig: propSizeConfig, }: {
    platformFontConfig: PlatformSpecificFont;
    sizeConfig?: FontConfig;
}) => {
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
    size: FontSizes;
    lineHeight: FontSizes;
    weight: FontSizes;
};
export * from "./defaults";
export * from "./types";
