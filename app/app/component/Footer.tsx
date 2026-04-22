import { Box, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons = [
  {
    link: "#",
    label: "linked in",
    icon: FaLinkedin,
  },
  {
    link: "#",
    label: "github",
    icon: FaGithub,
  },
  {
    link: "#",
    label: "email",
    icon: MdEmail,
  },
];

const Footer = () => {
  return (
    <Center
      height={"7rem"}
      flexDirection={"column"}
      borderStyle={"solid"}
      borderColor={"#AD49E1"}
      borderWidth={"1px 0"}
      gap={"4"}
    >
      <Text
        fontFamily={"var(--font-body)"}
        letterSpacing={"1px"}
        color={"#AD49E1"}
        fontSize={"18px"}
      >
        Develop and Design by Edijoy Lejas @2026
      </Text>
      <Flex gap={"2"}>
        {icons.map((item) => {
          const Icon = item.icon;
          return (
            <IconButton
              key={item.label}
              aria-label="Search database"
              size={"xl"}
              variant={"outline"}
            >
              <Icon />
            </IconButton>
          );
        })}
      </Flex>
    </Center>
  );
};

export default Footer;
