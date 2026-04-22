"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons = [
  { link: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
  { link: "https://github.com", label: "GitHub", icon: FaGithub },
  { link: "mailto:me@example.com", label: "Email", icon: MdEmail },
];

const Footer = () => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Box
      ref={ref}
      as="footer"
      position="relative"
      overflow="hidden"
      backgroundColor="white"
      borderTop="1px solid rgba(173,73,225,0.15)"
    >
      {/* Top gradient accent line */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="2px"
        background="linear-gradient(90deg, transparent, #AD49E1, #D17EF5, #AD49E1, transparent)"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent={{ base: "center", sm: "space-between" }}
          px={{ base: "2rem", md: "4rem", lg: "8rem" }}
          py={{ base: "1.8rem", md: "2rem" }}
          gap={{ base: "4", sm: "0" }}
        >
          {/* Left: credit text */}
          <motion.div variants={fadeUpVariants}>
            <Text
              fontFamily="var(--font-body)"
              letterSpacing="1px"
              color="#AD49E1"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
            >
              Develop and Design by{" "}
              <Text as="span" fontWeight="700">
                Edijoy Lejas
              </Text>{" "}
              © 2026
            </Text>
          </motion.div>

          {/* Right: social icons */}
          <motion.div variants={fadeUpVariants}>
            <Flex gap="3" alignItems="center">
              {icons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      scale: prefersReducedMotion ? 1 : 0.6,
                    }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: prefersReducedMotion ? 0 : 0.2 + i * 0.08,
                    }}
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : { scale: 1.15, y: -3, rotate: -5 }
                    }
                    whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      href={item.link}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        w={{ base: "38px", md: "42px" }}
                        h={{ base: "38px", md: "42px" }}
                        borderRadius="10px"
                        border="1.5px solid rgba(173,73,225,0.25)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="#AD49E1"
                        backgroundColor="white"
                        transition="all 0.2s ease"
                        _hover={{
                          backgroundColor: "#AD49E1",
                          color: "white",
                          borderColor: "#AD49E1",
                          boxShadow: "0 4px 16px rgba(173,73,225,0.3)",
                        }}
                        fontSize={{ base: "16px", md: "18px" }}
                      >
                        <Icon />
                      </Box>
                    </Link>
                  </motion.div>
                );
              })}
            </Flex>
          </motion.div>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Footer;
