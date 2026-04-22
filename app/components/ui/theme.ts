// theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const customSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-heading)" }, // Fredoka
        body: { value: "var(--font-body)" }, // Barlow Condensed
      },
    },
  },
});
