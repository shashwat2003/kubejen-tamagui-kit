import { Form as OgForm } from "tamagui";
import { Button, type ButtonProps } from "../button";

export const Trigger = OgForm.Trigger.styleable<{ extraProps?: ButtonProps }>(
  ({ children, extraProps, ...props }, forwardedRef) => {
    return (
      <OgForm.Trigger asChild ref={forwardedRef} {...props}>
        <Button {...extraProps}>{children}</Button>
      </OgForm.Trigger>
    );
  },
);
