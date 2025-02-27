import { XIcon } from "@kjt/untitled-icons";
import { View } from "tamagui";
import type { BaseInputExtraProps } from "./types";

// ============== Prefix ==============

type PrefixProps = Pick<BaseInputExtraProps, "prefix">;

export const Prefix: React.FC<PrefixProps> = ({ prefix }) => {
  return <>{prefix}</>;
};

// ============== Suffix ==============

type SuffixProps = Pick<BaseInputExtraProps, "suffix" | "allowClear"> & {
  value?: string;
  onClear?: () => void;
};

export const Suffix: React.FC<SuffixProps> = ({
  suffix,
  allowClear,
  value,
  onClear,
}) => {
  const allowClearNeeded = !!allowClear;
  const allowClearIcon =
    typeof allowClear === "object" && allowClear?.clearIcon ? (
      allowClear.clearIcon
    ) : (
      <XIcon size={"$icon.14"} />
    );

  return (
    <>
      {suffix}
      {allowClearNeeded && (
        <View
          animation={"100ms"}
          cursor={value ? "pointer" : "none"}
          p={"$xs"}
          backgroundColor={"$borderColor"}
          borderRadius={"$full"}
          justifyContent="center"
          alignItems="center"
          onPress={(e) => {
            onClear?.();
          }}
          disabled={!value}
          opacity={value ? 1 : 0}
        >
          {allowClearIcon}
        </View>
      )}
    </>
  );
};
