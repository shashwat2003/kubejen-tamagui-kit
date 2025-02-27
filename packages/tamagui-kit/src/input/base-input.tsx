import clsx from "clsx";
import { type ComponentProps, useContext, useRef } from "react";
import { Group, Input as OgInput } from "tamagui";
import { proxy, useSnapshot } from "valtio";
import { DisabledContext } from "../config-provider/disabled-context";
import {
  resetStyles,
  VariantAddonFrame,
  VariantContext,
  VariantFrame,
} from "../config-provider/variants";
import { Prefix, Suffix } from "./affix";
import type { BaseInputExtraProps } from "./types";

export const BaseInput = OgInput.styleable<BaseInputExtraProps>(
  (propsIn, forwardedRef) => {
    const {
      addonAfter,
      addonBefore,
      allowClear,
      onFocus,
      onBlur,
      onChange,
      prefixCls = "tk-input",
      prefix,
      suffix,
      defaultValue,
      value,
      ...props
    } = propsIn;

    const stateProxy = useRef(
      proxy({ focused: false, value: defaultValue ?? "" }),
    );
    const stateSnap = useSnapshot(stateProxy.current);

    const disabled = useContext(DisabledContext);
    const variant = useContext(VariantContext);

    const handleReset = () => {
      stateProxy.current.value = "";
      // biome-ignore lint/suspicious/noExplicitAny: cannot create custom event, workaround for now
      onChange?.({ target: { value: "" } } as any);
    };

    if (value && value !== stateSnap.value) {
      stateProxy.current.value = value;
    }

    return (
      <Group
        orientation="horizontal"
        borderRadius={variant === "underlined" ? "$none" : "$true"}
        className={clsx(`${prefixCls}-group`)}
      >
        {addonBefore && (
          <VariantAddonFrame
            variant={variant}
            focused={stateSnap.focused}
            className={clsx(`${prefixCls}-addon-before`)}
          >
            {addonBefore}
          </VariantAddonFrame>
        )}

        <VariantFrame
          variant={variant}
          focused={stateSnap.focused}
          gap={"$xs"}
          paddingHorizontal={"$md"}
          className={clsx(`${prefixCls}-variant-frame`)}
          f={1}
          justifyContent="center"
          alignItems="center"
        >
          <Prefix prefix={prefix} />
          <OgInput
            f={1}
            ref={forwardedRef}
            disabled={disabled}
            {...resetStyles}
            {...props}
            onFocus={(e) => {
              stateProxy.current.focused = true;
              onFocus?.(e);
            }}
            onBlur={(e) => {
              stateProxy.current.focused = false;
              onBlur?.(e);
            }}
            onChange={(event) => {
              stateProxy.current.value = event.nativeEvent.text;
              onChange?.(event);
            }}
            className={clsx(
              props.className,
              `${prefixCls}-box`,
              disabled && `${prefixCls}-disabled`,
              stateSnap.focused && `${prefixCls}-focused`,
            )}
            value={stateSnap.value}
          />
          <Suffix
            suffix={suffix}
            allowClear={allowClear}
            value={stateSnap.value}
            onClear={handleReset}
          />
        </VariantFrame>

        {addonAfter && (
          <VariantAddonFrame
            variant={variant}
            focused={stateSnap.focused}
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
