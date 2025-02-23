import RcForm from "rc-field-form";
import { Form as OgForm, type FormProps as OgFormProps } from "tamagui";
import { DisabledContextProvider } from "../config-provider/disabled-context";
import { FormContext, VariantContext } from "./context";
import type { FormProps } from "./types";

type InternalFormProps = FormProps & {
  componentProps?: OgFormProps;
};

export const InternalForm = ({
  feedbackIcons,
  layout,
  disabled,
  loading,
  variant,
  requiredMark,
  componentProps,
  ...formProps
}: InternalFormProps) => {
  return (
    <VariantContext.Provider value={variant ?? "outlined"}>
      <DisabledContextProvider disabled={disabled}>
        <FormContext.Provider
          value={{ feedbackIcons, layout, loading, requiredMark }}
        >
          <RcForm
            {...formProps}
            component={(props) => (
              <OgForm disabled={disabled} {...componentProps} {...props} />
            )}
          />
        </FormContext.Provider>
      </DisabledContextProvider>
    </VariantContext.Provider>
  );
};
