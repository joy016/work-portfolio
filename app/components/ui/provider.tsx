"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { customSystem } from "./theme";

export function Provider(props: Readonly<ColorModeProviderProps>) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  );
}
