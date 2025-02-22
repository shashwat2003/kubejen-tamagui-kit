import { createAnimations } from "@tamagui/animations-moti";

// Taken from uniswap/interface
export const animations = createAnimations({
  "100ms": {
    type: "timing",
    duration: 100,
  },
  "200ms": {
    type: "timing",
    duration: 200,
  },
  "300ms": {
    type: "timing",
    duration: 300,
  },
  stiff: {
    type: "spring",
    mass: 1,
    damping: 200,
    stiffness: 400,
  },
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  semiBouncy: {
    type: "spring",
    damping: 12,
    mass: 0.7,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  simple: {
    type: "timing",
    duration: 80,
  },
});
