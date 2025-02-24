import { type ComponentProps, useContext } from "react";
import { Button as OgButton } from "tamagui";
import { DisabledContext } from "../config-provider/disabled-context";

export const Button = OgButton.styleable((props, forwardedRef) => {
  const disabled = useContext(DisabledContext);

  return <OgButton ref={forwardedRef} disabled={disabled} {...props} />;
});

export type ButtonProps = ComponentProps<typeof Button>;
