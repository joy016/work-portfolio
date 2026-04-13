"use client";

import {
  Avatar,
  Button,
  Center,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type ButtonIcon = {
  label: string;
  component: React.ElementType;
};

const buttonIcons: ButtonIcon[] = [
  {
    label: "github",
    component: FaGithub,
  },
  {
    label: "linked in",
    component: FaLinkedinIn,
  },
  {
    label: "email",
    component: MdOutlineEmail,
  },
];
const Hero = () => {
  return (
    <div style={{ height: "90vh" }}>
      <Center
        flexDirection={"column"}
        gap={{ sm: "20px", md: "11" }}
        marginTop={"80px"}
      >
        <Avatar.Root height="12rem" width="12rem">
          <Avatar.Fallback fontSize="5xl" name="Edijoy Lejas" />
        </Avatar.Root>
        <Text textStyle={{ sm: "3xl", md: "3xl", lg: "6xl" }}>
          Hi, I'm Edijoy Lejas
        </Text>
        <Text textStyle={{ sm: "xl", md: "2xl", lg: "4xl" }}>
          Front End Developer
        </Text>
        <Text textStyle="2xl" maxWidth={"70rem"} textAlign={"center"}>
          React.js-focused software engineer with 3+ years of experience who
          enjoys turning ideas into clean, user-friendly interfaces. Passionate
          about continuous growth, I’m always learning—whether it’s improving my
          technical skills, communication, or exploring new experiences outside
          of work.
        </Text>
        <Flex gap={"5"}>
          <Button
            colorPalette="teal"
            size="2xl"
            rounded={"10px"}
            onClick={() =>
              document
                .getElementById("section3")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See work
          </Button>
          <Button
            size="2xl"
            rounded={"10px"}
            variant={"outline"}
            colorPalette={"teal"}
            onClick={() =>
              document
                .getElementById("section4")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in touch
          </Button>
        </Flex>
        <Flex>
          {buttonIcons.map(({ label, component: Icon }) => (
            <IconButton
              aria-label="github"
              variant={"ghost"}
              size={"lg"}
              key={label}
            >
              <Icon style={{ height: "90%", width: "90%" }} />
            </IconButton>
          ))}
        </Flex>
      </Center>
    </div>
  );
};

export default Hero;
