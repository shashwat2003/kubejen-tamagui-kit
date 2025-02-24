import clsx from "clsx";
import { type ComponentProps, type ReactNode, useContext } from "react";
import { Group, Input as OgInput } from "tamagui";
import { DisabledContext } from "../config-provider/disabled-context";
import {
  resetStyles,
  VariantAddonFrame,
  VariantContext,
  VariantFrame,
} from "../config-provider/variants";
import { useObjectState } from "../hooks";

type BaseInputExtraProps = {
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean | { clearIcon: ReactNode };
  prefixCls?: string | undefined;
};

export const BaseInput = OgInput.styleable<BaseInputExtraProps>(
  (propsIn, forwardedRef) => {
    const {
      addonAfter,
      addonBefore,
      allowClear,
      onFocus,
      onBlur,
      prefixCls = "tk-input",
      ...props
    } = propsIn;
    const [state, setState] = useObjectState({
      focused: false,
    });

    const disabled = useContext(DisabledContext);
    const variant = useContext(VariantContext);

    return (
      <Group
        orientation="horizontal"
        borderRadius={variant === "underlined" ? "$none" : "$true"}
        className={clsx(`${prefixCls}-group`)}
      >
        {addonBefore && (
          <VariantAddonFrame
            variant={variant}
            focused={state.focused}
            className={clsx(`${prefixCls}-addon-before`)}
          >
            {addonBefore}
          </VariantAddonFrame>
        )}

        <VariantFrame
          variant={variant}
          focused={state.focused}
          gap={"$md"}
          className={clsx(`${prefixCls}-variant-frame`)}
          f={1}
        >
          <OgInput
            ref={forwardedRef}
            disabled={disabled}
            {...resetStyles}
            {...props}
            onFocus={(e) => {
              setState({ focused: true });
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setState({ focused: false });
              onBlur?.(e);
            }}
            className={clsx(
              props.className,
              `${prefixCls}-box`,
              disabled && `${prefixCls}-disabled`,
              state.focused && `${prefixCls}-focused`,
            )}
          />
        </VariantFrame>

        {addonAfter && (
          <VariantAddonFrame
            variant={variant}
            focused={state.focused}
            className={clsx(`${prefixCls}-addon-after`)}
          >
            {addonAfter}
          </VariantAddonFrame>
        )}
      </Group>
    );
  },
);

export type BaseInputProps = ComponentProps<typeof BaseInput>;
