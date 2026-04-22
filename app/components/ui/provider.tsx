"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { customSystem } from "./theme";

export function Provider(props: Readonly<ColorModeProviderProps>) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
