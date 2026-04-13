"use client";

import { Avatar, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    id: "section2",
    href: "#section2",
    label: "Skills",
  },
  {
    id: "section3",
    href: "#section3",
    label: "Work Experience",
  },
  {
    id: "section4",
    href: "#section4",
    label: "Contact",
  },
];

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Flex
      justify="space-between"
      padding="25px"
      position="sticky"
      top="0"
      zIndex="100"
      backgroundColor="white"
    >
      <div>
        <Avatar.Root>
          <Avatar.Fallback name="Edijoy Lejas" />
        </Avatar.Root>
      </div>
      <Flex gap="4">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={(e) => handleScroll(e, item.id)}
          >
            <div>{item.label}</div>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
