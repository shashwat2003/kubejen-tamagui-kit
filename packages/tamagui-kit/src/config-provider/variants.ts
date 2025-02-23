export const Variants = [
  "outlined",
  "borderless",
  "filled",
  "underlined",
] as const;

export type Variant = (typeof Variants)[number];
