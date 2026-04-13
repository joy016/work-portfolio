import { Center, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center
      style={{
        height: "7rem",
        flexDirection: "column",
        backgroundColor: "#5A9690",
        color: "#ffffff",
      }}
    >
      <Text truncate textStyle="lg">
        Design and built by Edijoy Lejas
      </Text>
      <Text truncate>© 2026 All rights reserved.</Text>
    </Center>
  );
};

export default Footer;
