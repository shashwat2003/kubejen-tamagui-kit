import { withStaticProperties } from "tamagui";
import { InternalForm } from "./form";
import { Item } from "./item";
import { Trigger } from "./trigger";

export const Form = withStaticProperties(InternalForm, {
  Trigger,
  Item,
});
