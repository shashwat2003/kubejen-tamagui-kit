import { createContext } from "react";
import type {
  FeedbackIcons,
  Layout,
  RequiredMark,
  ValidateStatus,
} from "./types";

type FormContextType = {
  feedbackIcons?: FeedbackIcons;
  layout?: Layout;
  loading?: boolean;
  requiredMark?: RequiredMark;
};

type FormItemContextType = {
  validateStatus?: ValidateStatus | null;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  initialValue?: any;
};

export const FormContext = createContext<FormContextType>({});
export const FormItemContext = createContext<FormItemContextType>({});
