"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
  Badge,
  VStack,
  HStack,
} from "@chakra-ui/react";

// ─── skill data ───────────────────────────────────────────────────────────────
const techSkills = [
  { label: "React Js", source: "/icons/react.png" },
  { label: "Next Js", source: "/icons/next.png" },
  { label: "HTML", source: "/icons/html.png" },
  { label: "CSS", source: "/icons/css-3.png" },
  { label: "Javascript", source: "/icons/js.png" },
  { label: "Typescript", source: "/icons/typescript.png" },
  { label: "Git", source: "/icons/social.png" },
  { label: "GitHub", source: "/icons/github.png" },
  { label: "Agile", source: "/icons/agile.png" },
  { label: "Sonar", source: "/icons/sonar.png" },
  { label: "Figma", source: "/icons/figma.png" },
  { label: "C#", source: "/icons/c-sharp.png" },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "United Marine Training Center",
    period: "Jan 2025 – Present",
    tag: "Current",
    color: "#e44d7b",
    description:
      "Modernized legacy systems using React and Next.js, consolidating multiple platforms into a single, maintainable solution. Improved system stability by identifying and fixing bugs, and ensured code quality through peer reviews. Continuously adopted new tools and best practices to enhance development efficiency.",
  },
  {
    title: "React Developer",
    company: "M One Marketing International",
    period: "April 2023 – March 2024",
    tag: null,
    color: "#942EC9",
    description:
      "Developed responsive front-end applications based on Figma designs, ensuring accurate implementation of UI/UX specifications. Collaborated with the Product Owner to meet application requirements and integrated APIs to connect with backend services. Resolved bugs to maintain performance and stability, while providing regular progress updates to the Project Manager within an Agile environment",
  },
  {
    title: "Software Engineer Associate",
    company: "Infor PSSC",
    period: "Aug 2022 – Feb 2023",
    tag: null,
    color: "#f59e0b",
    description:
      "Developed new features based on client requirements, collaborating with Business Analysts and QA to ensure alignment with specifications. Performed unit testing and participated in code reviews to maintain high code quality. Efficiently debugged and resolved issues, while continuously staying updated with emerging technologies and industry trends.",
  },
  {
    title: "Junior Software Engineer",
    company: "Xytron International Inc.",
    period: "Sep 2021 – July 2022",
    tag: null,
    color: "#10b981",
    description:
      "Developed and maintained applications to process client-provided text and Excel files, generating data for letter creation. Collaborated with cross-functional teams to understand business needs and deliver effective software solutions. Troubleshot and resolved issues, and maintained clear documentation for system design, testing, and support.",
  },
];

// ─── animated skill card ──────────────────────────────────────────────────────
const MotionBox = motion.create(Box);

function SkillCard({
  item,
  index,
}: {
  item: (typeof techSkills)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4, scale: 1.05 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="2"
      p="3"
      borderRadius="16px"
      border="1px solid"
      borderColor="gray.100"
      bg="white"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      cursor="default"
      _hover={{
        boxShadow: "0 8px 24px rgba(148,46,201,0.12)",
        borderColor: "purple.200",
      }}
      w="80px"
      h="80px"
    >
      <Image src={item.source} alt={item.label} w="32px" h="32px" />
      <Text
        fontSize="10px"
        fontWeight="600"
        color="gray.600"
        textAlign="center"
        lineHeight="1.2"
      >
        {item.label}
      </Text>
    </MotionBox>
  );
}

// ─── animated experience card ─────────────────────────────────────────────────
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Flex ref={ref} align="flex-start" gap="4" position="relative">
      {/* Left: dot + vertical line */}
      <Flex direction="column" align="center" flexShrink={0} pt="1">
        <MotionBox
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: index * 0.12 }}
          w="14px"
          h="14px"
          borderRadius="full"
          bg={exp.color}
          boxShadow={`0 0 0 3px ${exp.color}30`}
          zIndex={1}
          flexShrink={0}
        />
        {index < experiences.length - 1 && (
          <Box w="2px" flex="1" minH="60px" bg="gray.100" mt="1" />
        )}
      </Flex>

      {/* Right: card */}
      <MotionBox
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.55,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        flex="1"
        mb="6"
      >
        <Box
          p="5"
          borderRadius="16px"
          bg="white"
          border="1px solid"
          borderColor="gray.100"
          borderLeft={`3px solid ${exp.color}`}
          boxShadow="0 2px 16px rgba(0,0,0,0.05)"
          _hover={{
            boxShadow: `0 8px 32px ${exp.color}22`,
            transform: "translateY(-2px)",
          }}
          transition="all 0.25s"
        >
          <Flex
            justify="space-between"
            align="flex-start"
            mb="1"
            wrap="wrap"
            gap="2"
          >
            <Text
              fontSize="11px"
              fontWeight="700"
              color={exp.color}
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              {exp.period}
            </Text>
            {exp.tag && (
              <Badge
                bg={`${exp.color}15`}
                color={exp.color}
                fontSize="10px"
                fontWeight="700"
                px="2"
                py="0.5"
                borderRadius="full"
                letterSpacing="0.05em"
              >
                {exp.tag}
              </Badge>
            )}
          </Flex>
          <Text fontSize="17px" fontWeight="800" color="gray.800" mb="0.5">
            {exp.title}
          </Text>
          <Text fontSize="13px" color="gray.500" fontWeight="500" mb="3">
            {exp.company}
          </Text>
          <Text fontSize="13px" color="gray.500" lineHeight="1.7">
            {exp.description}
          </Text>
        </Box>
      </MotionBox>
    </Flex>
  );
}

// ─── main section ─────────────────────────────────────────────────────────────
export default function Skills() {
  // ✅ declared once at the top of the component, used in the heading below
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box
      id="section2"
      minH="100vh"
      py="80px"
      px={{ base: "20px", md: "60px" }}
      bg="gray.50"
    >
      {/* ── Section heading with animated underline ── */}
      <Box
        ref={headingRef}
        textAlign="center"
        mb={{ base: "2.5rem", md: "3.5rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Heading
            fontSize={{ base: "28px", md: "37px" }}
            color="#942EC9"
            fontFamily="var(--font-heading)"
            letterSpacing="1px"
            display="inline-block"
            position="relative"
          >
            My Tech Skills &amp; Work Experience
          </Heading>

          {/* Animated underline — grows from center */}
          <Box display="flex" justifyContent="center" mt="3">
            <motion.div
              initial={{ scaleX: 0, originX: 0.5 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              style={{
                height: "3px",
                width: "80px",
                background: "linear-gradient(90deg, #AD49E1, #D17EF5, #AD49E1)",
                borderRadius: "4px",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Two-column layout */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap="120px"
        maxW="1100px"
        mx="auto"
        align="flex-start"
      >
        {/* ── LEFT: Skills ── */}
        <VStack
          align="flex-start"
          flexShrink={0}
          w={{ base: "100%", lg: "320px" }}
          gap="4"
        >
          <HStack gap="2" mb="2">
            <Box w="3px" h="20px" borderRadius="full" bg="purple.500" />
            <Text
              fontSize="14px"
              fontWeight="700"
              color="gray.700"
              letterSpacing="0.05em"
              textTransform="uppercase"
            >
              Tech Stack
            </Text>
          </HStack>
          <Grid templateColumns="repeat(4, 1fr)" gap="3">
            {techSkills.map((item, i) => (
              <SkillCard key={item.label} item={item} index={i} />
            ))}
          </Grid>
        </VStack>

        {/* ── RIGHT: Experience ── */}
        <VStack align="stretch" flex="1" gap="0">
          <HStack gap="2" mb="6">
            <Box w="3px" h="20px" borderRadius="full" bg="pink.400" />
            <Text
              fontSize="14px"
              fontWeight="700"
              color="gray.700"
              letterSpacing="0.05em"
              textTransform="uppercase"
            >
              Work Experience
            </Text>
          </HStack>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}
