"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionHeading = motion.create(Heading);
const MotionButton = motion.create(Button);

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  const imageMobileVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  return (
    <Box
      id="section1"
      backgroundColor="#E2ECDE"
      px={{ base: "1.5rem", sm: "2.5rem", md: "4rem" }}
      pt={{ base: "5rem", md: "7rem" }}
      pb={{ base: "3rem", md: "7rem" }}
      overflow="hidden"
      position="relative"
    >
      {/* Background radial pulse */}
      {mounted && (
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(173,73,225,0.06) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          animate={prefersReducedMotion ? {} : { scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* ── DESKTOP layout (lg+): side by side ── */}
      <MotionFlex
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text */}
        <Center w="55%" flexDirection="column" gap="10">
          <MotionBox
            display="flex"
            flexDirection="column"
            gap="5rem"
            marginTop="50px"
            variants={containerVariants}
          >
            <MotionHeading
              variants={fadeUpVariants}
              fontSize="106px"
              letterSpacing="6px"
            >
              Hi I am
            </MotionHeading>

            <MotionHeading
              variants={fadeUpVariants}
              fontSize="118px"
              textAlign="center"
              color="#AD49E1"
              letterSpacing="6px"
            >
              <motion.span
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        textShadow: [
                          "0 0 0px rgba(173,73,225,0)",
                          "0 0 20px rgba(173,73,225,0.4)",
                          "0 0 0px rgba(173,73,225,0)",
                        ],
                      }
                }
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                style={{ display: "inline-block" }}
              >
                Joy
              </motion.span>
            </MotionHeading>

            <MotionHeading
              variants={fadeUpVariants}
              fontSize="23px"
              textAlign="center"
              fontWeight="medium"
            >
              Front End Developer
            </MotionHeading>
          </MotionBox>

          <MotionBox variants={fadeUpVariants}>
            <Text
              textAlign="center"
              fontFamily="var(--font-body)"
              letterSpacing="2px"
              fontSize="18px"
            >
              React.js-focused software engineer with 3+ years of experience who
              enjoys turning ideas into clean, user-friendly interfaces.
              Passionate about continuous growth, I'm always learning—whether
              it's improving my technical skills, communication, or exploring
              new experiences outside of work.
            </Text>
          </MotionBox>

          <MotionFlex gap="2.5" variants={fadeUpVariants}>
            <MotionButton
              size="xl"
              fontFamily="var(--font-body)"
              letterSpacing="2px"
              bg="#AD49E1"
              color="white"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={
                { type: "spring", stiffness: 400, damping: 17 } as never
              }
              _hover={{ bg: "#9B3FD0" }}
              onClick={(e) => handleScroll(e, "section4")}
            >
              Find me anywhere
            </MotionButton>
            <MotionButton
              size="xl"
              fontFamily="var(--font-body)"
              variant="outline"
              borderColor="#AD49E1"
              color="#AD49E1"
              letterSpacing="2px"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={
                { type: "spring", stiffness: 400, damping: 17 } as never
              }
              _hover={{ bg: "#AD49E1", color: "white" }}
              onClick={(e) => handleScroll(e, "section3")}
            >
              See Works
            </MotionButton>
          </MotionFlex>
        </Center>

        {/* Right: Image */}
        <MotionBox
          flex="1"
          variants={imageVariants}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 } as never}
        >
          <Image
            src="here-image.png"
            w="100%"
            maxW="700px"
            h="auto"
            mx="auto"
            display="block"
          />
        </MotionBox>
      </MotionFlex>

      {/* ── MOBILE / TABLET layout (base–md): stacked ── */}
      <MotionFlex
        display={{ base: "flex", lg: "none" }}
        flexDirection="column"
        alignItems="center"
        gap={{ base: "6", md: "10" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image sits on top on mobile */}
        <MotionBox
          variants={imageMobileVariants}
          w={{ base: "220px", sm: "300px", md: "400px" }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 } as never}
        >
          <Image src="here-image.png" w="100%" h="auto" />
        </MotionBox>

        {/* Text block */}
        <MotionBox
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={{ base: "1.5rem", md: "2.5rem" }}
          variants={containerVariants}
          textAlign="center"
          w="100%"
        >
          <MotionHeading
            variants={fadeUpVariants}
            fontSize={{ base: "42px", sm: "56px", md: "72px" }}
            letterSpacing="4px"
          >
            Hi I am
          </MotionHeading>

          <MotionHeading
            variants={fadeUpVariants}
            fontSize={{ base: "56px", sm: "72px", md: "90px" }}
            color="#AD49E1"
            letterSpacing="4px"
          >
            <motion.span
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      textShadow: [
                        "0 0 0px rgba(173,73,225,0)",
                        "0 0 20px rgba(173,73,225,0.4)",
                        "0 0 0px rgba(173,73,225,0)",
                      ],
                    }
              }
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              style={{ display: "inline-block" }}
            >
              Joy
            </motion.span>
          </MotionHeading>

          <MotionHeading
            variants={fadeUpVariants}
            fontSize={{ base: "18px", md: "22px" }}
            fontWeight="medium"
          >
            Front End Developer
          </MotionHeading>

          <MotionBox variants={fadeUpVariants} px={{ base: "0", md: "2rem" }}>
            <Text
              fontFamily="var(--font-body)"
              letterSpacing="1.5px"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.8"
            >
              React.js-focused software engineer with 3+ years of experience who
              enjoys turning ideas into clean, user-friendly interfaces.
              Passionate about continuous growth, I'm always learning—whether
              it's improving my technical skills, communication, or exploring
              new experiences outside of work.
            </Text>
          </MotionBox>

          <MotionFlex
            gap="3"
            variants={fadeUpVariants}
            flexDirection={{ base: "column", sm: "row" }}
            w={{ base: "100%", sm: "auto" }}
          >
            <MotionButton
              size="lg"
              fontFamily="var(--font-body)"
              letterSpacing="2px"
              bg="#AD49E1"
              color="white"
              w={{ base: "100%", sm: "auto" }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={
                { type: "spring", stiffness: 400, damping: 17 } as never
              }
              _hover={{ bg: "#9B3FD0" }}
              onClick={(e) => handleScroll(e, "section4")}
            >
              Find me anywhere
            </MotionButton>
            <MotionButton
              size="lg"
              fontFamily="var(--font-body)"
              variant="outline"
              borderColor="#AD49E1"
              color="#AD49E1"
              letterSpacing="2px"
              w={{ base: "100%", sm: "auto" }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={
                { type: "spring", stiffness: 400, damping: 17 } as never
              }
              _hover={{ bg: "#AD49E1", color: "white" }}
              onClick={(e) => handleScroll(e, "section3")}
            >
              See Works
            </MotionButton>
          </MotionFlex>
        </MotionBox>
      </MotionFlex>
    </Box>
  );
};

export default Hero;
