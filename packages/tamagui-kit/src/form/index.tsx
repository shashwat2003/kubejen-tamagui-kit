import { Form as OGForm, withStaticProperties } from "tamagui";
import { InternalForm } from "./form";
import { Item } from "./item";

export const Form = withStaticProperties(InternalForm, {
  Trigger: OGForm.Trigger,
  Item: Item,
});
