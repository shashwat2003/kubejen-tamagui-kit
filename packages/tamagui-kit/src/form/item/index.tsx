import { Typography } from "../../typography";
import type { FieldProps } from "rc-field-form/es/Field";
import Field from "rc-field-form/es/Field";
import type { Meta } from "rc-field-form/es/interface";
import { type ReactNode, useContext, useState } from "react";
import {
  AnimatePresence,
  Group,
  type GroupProps,
  View,
  type ViewProps,
} from "tamagui";
import { FormContext, FormItemContext } from "../context";
import type { FeedbackIcons, Layout, ValidateStatus } from "../types";
import ItemHelper from "./ItemHelper";
import { genEmptyMeta, getHelperProps, getStatus } from "./utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type ItemProps<Values = any> = FieldProps<Values> & {
  layout?: Layout;
  label?: ReactNode;
  labelProps?: ViewProps;
  wrapperProps?: ViewProps;
  groupProps?: GroupProps;
  hasFeedback?: boolean | { icons: FeedbackIcons };
  validateStatus?: ValidateStatus;
  help?: string;
  noHelper?: boolean;
};

export const Item = ({
  layout,
  label,
  labelProps,
  wrapperProps,
  groupProps,
  hasFeedback,
  validateStatus,
  help,
  noHelper,
  initialValue,
  children,
  ...fieldProps
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: ItemProps<any>) => {
  const [meta, setMeta] = useState<Meta>(() => genEmptyMeta());
  const { layout: formLayout } = useContext(FormContext);

  const mergedLayout = layout ?? formLayout;
  const isHorizontal = mergedLayout === "horizontal";

  const onMetaChange = (nextMeta: Meta & { destroy?: boolean }) => {
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta);
  };

  const mergedValidateStatus = getStatus(
    meta.errors,
    meta.warnings,
    meta,
    null,
    !!hasFeedback,
    validateStatus,
  );
  const mergedInitialValue = initialValue ?? "";

  return (
    <FormItemContext.Provider
      value={{
        validateStatus: mergedValidateStatus,
        initialValue: mergedInitialValue,
      }}
    >
      <Group gap="$md" {...groupProps} orientation={mergedLayout}>
        {!!label && (
          <View {...(isHorizontal && { jc: "center" })} {...labelProps}>
            {typeof label === "string" ? (
              <Typography.Text>
                {label}
                {isHorizontal && ":"}
              </Typography.Text>
            ) : (
              label
            )}
          </View>
        )}
        <View f={1} gap={"$md"}>
          <Field
            initialValue={mergedInitialValue}
            {...fieldProps}
            onMetaChange={onMetaChange}
          >
            {children}
          </Field>
          {noHelper !== true && (
            <AnimatePresence exitBeforeEnter>
              {meta.errors.length ? (
                meta.errors.map((error, key) => (
                  <ItemHelper
                    help={error}
                    key={key}
                    {...getHelperProps(mergedValidateStatus)}
                  />
                ))
              ) : (
                <ItemHelper
                  help={help ?? " "}
                  {...getHelperProps(mergedValidateStatus)}
                />
              )}
            </AnimatePresence>
          )}
        </View>
      </Group>
    </FormItemContext.Provider>
  );
};
