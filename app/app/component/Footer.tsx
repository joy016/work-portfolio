import { Box, Center, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const icons = [
  {
    link: "https://www.linkedin.com/in/edijoy-lejas-28b02b1aa",
    label: "linked in",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/joy016/work-portfolio",
    label: "github",
    icon: FaGithub,
  },
  {
    link: "mailto:jhoylejas@gmail.com",
    label: "email",
    icon: MdEmail,
  },
];

const Footer = () => {
  return (
    <Center
      gap={"4"}
      flexDirection={"column"}
      borderStyle={"solid"}
      borderColor={"#AD49E1"}
      borderWidth={"1px 0"}
      padding={"1rem 0"}
    >
      <Box>
        <Text
          fontFamily={"var(--font-body)"}
          letterSpacing={"1px"}
          color={"#AD49E1"}
          fontSize={"18px"}
        >
          Develop and Design by Edijoy Lejas @2026
        </Text>
        <Text
          fontFamily={"var(--font-body)"}
          letterSpacing={"1px"}
          color={"#AD49E1"}
          fontSize={"15px"}
          textAlign={"center"}
        >
          Built using Next js and Chakra UI
        </Text>
      </Box>

      <Flex gap={"2"}>
        {icons.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.link} key={item.label} target="_blank">
              <IconButton
                aria-label="Search database"
                size={"xl"}
                variant={"outline"}
              >
                <Icon />
              </IconButton>
            </Link>
          );
        })}
      </Flex>
    </Center>
  );
};

export default Footer;
