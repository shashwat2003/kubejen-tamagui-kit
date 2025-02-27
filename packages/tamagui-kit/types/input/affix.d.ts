import type { BaseInputExtraProps } from "./types";
type PrefixProps = Pick<BaseInputExtraProps, "prefix">;
export declare const Prefix: React.FC<PrefixProps>;
type SuffixProps = Pick<BaseInputExtraProps, "suffix" | "allowClear"> & {
    value?: string;
    onClear?: () => void;
};
export declare const Suffix: React.FC<SuffixProps>;
export {};
//# sourceMappingURL=affix.d.ts.map