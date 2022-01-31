import * as React from "react";
import { ReactNode } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { Providers };
