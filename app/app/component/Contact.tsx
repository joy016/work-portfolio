"use client";

import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { RiMailLine } from "react-icons/ri";

const MotionBox = motion.create(Box);

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 48, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : 0.35,
      },
    },
  };

  return (
    <Box
      id="section4"
      ref={sectionRef}
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: "1.5rem", sm: "2.5rem", md: "4rem" }}
      py={{ base: "4rem", md: "6rem" }}
      position="relative"
      overflow="hidden"
      backgroundColor="white"
    >
      {/* Decorative background blobs */}
      <Box
        position="absolute"
        top="-120px"
        right="-120px"
        w="400px"
        h="400px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(173,73,225,0.07) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="300px"
        h="300px"
        borderRadius="50%"
        background="radial-gradient(circle, rgba(173,73,225,0.05) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          width: "100%",
          maxWidth: "680px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        {/* Heading */}
        <motion.div
          variants={fadeUpVariants}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <Heading
            fontSize={{ base: "36px", md: "52px" }}
            fontFamily="var(--font-heading)"
            letterSpacing="2px"
            color="#1a1a2e"
          >
            Get In Touch
          </Heading>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
            style={{
              height: "3px",
              width: "60px",
              margin: "12px auto 0",
              background: "linear-gradient(90deg, #AD49E1, #D17EF5)",
              borderRadius: "4px",
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <Text
            fontFamily="var(--font-body)"
            fontSize={{ base: "15px", md: "17px" }}
            color="#666"
            letterSpacing="0.5px"
            lineHeight="1.7"
          >
            Have a project in mind or want to collaborate?{" "}
            <Text as="span" color="#AD49E1" fontWeight="600">
              Feel free to reach out!
            </Text>
          </Text>
        </motion.div>

        {/* Card */}
        <MotionBox
          variants={cardVariants}
          w="100%"
          backgroundColor="white"
          borderRadius="20px"
          boxShadow="0 8px 48px rgba(173,73,225,0.12), 0 2px 12px rgba(0,0,0,0.06)"
          border="1px solid rgba(173,73,225,0.12)"
          p={{ base: "1.8rem", md: "2.5rem" }}
          position="relative"
          overflow="hidden"
        >
          {/* Top accent bar */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            h="3px"
            background="linear-gradient(90deg, #AD49E1, #D17EF5, #AD49E1)"
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: "center", padding: "2rem 0" }}
            >
              <motion.div
                animate={
                  prefersReducedMotion ? {} : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ fontSize: "48px", marginBottom: "1rem" }}
              >
                🎉
              </motion.div>
              <Heading
                fontSize="22px"
                color="#AD49E1"
                mb="3"
                fontFamily="var(--font-heading)"
              >
                Message sent!
              </Heading>
              <Text color="#666" fontFamily="var(--font-body)" fontSize="15px">
                Thanks for reaching out, I'll get back to you soon.
              </Text>
              <Button
                mt="6"
                size="sm"
                variant="outline"
                borderColor="#AD49E1"
                color="#AD49E1"
                fontFamily="var(--font-body)"
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: "", email: "", message: "" });
                }}
                _hover={{ bg: "#AD49E1", color: "white" }}
              >
                Send another
              </Button>
            </motion.div>
          ) : (
            <Flex flexDirection="column" gap="6">
              {/* Name + Email row on desktop */}
              <Flex gap="4" flexDirection={{ base: "column", sm: "row" }}>
                <Field.Root flex="1">
                  <Field.Label
                    fontFamily="var(--font-body)"
                    fontSize="13px"
                    fontWeight="600"
                    letterSpacing="1px"
                    color="#555"
                    textTransform="uppercase"
                    mb="1"
                  >
                    Name
                  </Field.Label>
                  <Input
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    borderColor={
                      focused === "name" ? "#AD49E1" : "rgba(0,0,0,0.12)"
                    }
                    borderWidth="1.5px"
                    borderRadius="10px"
                    _focus={{
                      borderColor: "#AD49E1",
                      boxShadow: "0 0 0 3px rgba(173,73,225,0.12)",
                    }}
                    _hover={{ borderColor: "#D17EF5" }}
                    fontFamily="var(--font-body)"
                    fontSize="15px"
                    h="46px"
                    transition="all 0.2s ease"
                  />
                </Field.Root>

                <Field.Root flex="1">
                  <Field.Label
                    fontFamily="var(--font-body)"
                    fontSize="13px"
                    fontWeight="600"
                    letterSpacing="1px"
                    color="#555"
                    textTransform="uppercase"
                    mb="1"
                  >
                    Email
                  </Field.Label>
                  <Input
                    placeholder="me@example.com"
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    borderColor={
                      focused === "email" ? "#AD49E1" : "rgba(0,0,0,0.12)"
                    }
                    borderWidth="1.5px"
                    borderRadius="10px"
                    _focus={{
                      borderColor: "#AD49E1",
                      boxShadow: "0 0 0 3px rgba(173,73,225,0.12)",
                    }}
                    _hover={{ borderColor: "#D17EF5" }}
                    fontFamily="var(--font-body)"
                    fontSize="15px"
                    h="46px"
                    transition="all 0.2s ease"
                  />
                </Field.Root>
              </Flex>

              <Field.Root>
                <Field.Label
                  fontFamily="var(--font-body)"
                  fontSize="13px"
                  fontWeight="600"
                  letterSpacing="1px"
                  color="#555"
                  textTransform="uppercase"
                  mb="1"
                >
                  Message
                </Field.Label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  borderColor={
                    focused === "message" ? "#AD49E1" : "rgba(0,0,0,0.12)"
                  }
                  borderWidth="1.5px"
                  borderRadius="10px"
                  _focus={{
                    borderColor: "#AD49E1",
                    boxShadow: "0 0 0 3px rgba(173,73,225,0.12)",
                  }}
                  _hover={{ borderColor: "#D17EF5" }}
                  fontFamily="var(--font-body)"
                  fontSize="15px"
                  minH="140px"
                  resize="vertical"
                  transition="all 0.2s ease"
                />
              </Field.Root>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  w="100%"
                  size="lg"
                  fontFamily="var(--font-body)"
                  letterSpacing="2px"
                  fontSize="15px"
                  h="52px"
                  bg="#AD49E1"
                  color="white"
                  borderRadius="10px"
                  _hover={{ bg: "#9B3FD0" }}
                  onClick={handleSubmit}
                  transition="background 0.2s ease"
                >
                  <RiMailLine
                    style={{ marginRight: "8px", fontSize: "18px" }}
                  />
                  Send me a message
                </Button>
              </motion.div>
            </Flex>
          )}
        </MotionBox>
      </motion.div>
    </Box>
  );
};

export default Contact;
