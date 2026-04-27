"use client";

import { Badge, Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion.create(Box);

// ── Data ──────────────────────────────────────────────────────────────────────
const workExperience = [
  {
    key: 12,
    imgSrc: "itemInventory.png",
    companyName: "United Marine Training Center",
    project: "Inventory System",
    position: "Software Engineer",
    workDesc: `I participated in building a system used by our partner suppliers. I built an Item Inventory module where users can track stocks of available items, add stocks, search stocks through item batch, and add or delete a batch.`,
    techStacks: [
      "React Js",
      "Next Js",
      "Material UI",
      "MNCore component",
      "Typescript",
      "Git",
      "Agile",
    ],
  },
  {
    key: 1,
    imgSrc: "balanghai.png",
    companyName: "United Marine Training Center",
    project: "Employee Portal",
    position: "Software Engineer / Frontend focused",
    workDesc: `A software engineer focused on front-end development, working across multiple modules used by different departments, including visa ordering, visa administration, visa supplier management, loan ordering, and loan administration. Also participated in peer code reviews and collaborated with Business Analysts to clarify and validate module requirements.`,
    techStacks: [
      "React Js",
      "Next Js",
      "Redux",
      "Material UI",
      "Jira",
      "Agile",
      "Git",
    ],
  },
  {
    key: 2,
    imgSrc: "infor.png",
    companyName: "Infor Pssc",
    project: "Infor CloudSuite PLM for Fashion",
    position: "Junior Software Engineer / Full Stack Engineer",
    workDesc: `Worked as a Junior Full-Stack Engineer within a fashion line of business, contributing to a multitenant account management system. Collaborated closely with Business Analysts and QA engineers to gather and clarify feature requirements, ensuring deliverables aligned with business needs. Participated in Agile ceremonies and peer code reviews, developed new features, resolved reported bugs, and wrote unit tests using Jest to maintain code reliability.`,
    techStacks: [
      "C#",
      ".Net core web api",
      "React Js",
      "Javascript",
      "MySql",
      "Redux",
      "Git",
      "Jira",
      "saas",
      "Jest testing",
    ],
  },
  {
    key: 3,
    imgSrc: "xytron.png",
    project: "Maintaining Existing System",
    companyName: "Xytron International Inc.",
    position: "Junior Software Engineer",
    workDesc: `Contributed to building and maintaining internal tools that streamlined operations across multiple departments — reducing manual workloads and improving data accuracy in critical business workflows. Responsibilities included maintaining the SOA data generation system, developing cross-department tools, resolving bugs, and documenting systems for long-term maintainability.`,
    techStacks: [
      "C#",
      "Vb.net",
      "Press Printing (internal tools)",
      "Microsoft db access",
      "MySql",
    ],
  },
];

// ── Animated card wrapper ─────────────────────────────────────────────────────
const ProjectCard = ({
  item,
  index,
}: {
  item: (typeof workExperience)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 40,
      scale: prefersReducedMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : (index % 3) * 0.1,
      },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={
        prefersReducedMotion
          ? {}
          : { y: -6, boxShadow: "0 20px 48px rgba(173,73,225,0.18)" }
      }
      transition={{ type: "spring", stiffness: 260, damping: 22 } as never}
      borderRadius="16px"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="0 2px 16px rgba(0,0,0,0.07)"
      display="flex"
      flexDirection="column"
      h="100%"
      style={{ cursor: "default" }}
    >
      {/* Image with overlay on hover */}
      <Box position="relative" overflow="hidden" flexShrink={0}>
        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={item.imgSrc}
            alt={item.companyName}
            w="100%"
            h={{ base: "180px", md: "210px" }}
            objectFit="cover"
            display="block"
          />
        </motion.div>

        {/* Subtle gradient fade at bottom of image */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          h="48px"
          background="linear-gradient(to top, rgba(255,255,255,0.9), transparent)"
          pointerEvents="none"
        />
      </Box>

      {/* Body */}
      <Box
        p={{ base: "1.2rem", md: "1.5rem" }}
        flex="1"
        display="flex"
        flexDirection="column"
        gap="2"
      >
        {/* Project name */}
        <Text
          fontFamily="var(--font-heading)"
          fontSize={{ base: "16px", md: "18px" }}
          fontWeight="700"
          color="#1a1a2e"
          textAlign="center"
          letterSpacing="0.5px"
        >
          {item.project}
        </Text>

        {/* Company */}
        <Text
          fontFamily="var(--font-heading)"
          fontSize={{ base: "13px", md: "14px" }}
          fontWeight="600"
          color="#AD49E1"
          letterSpacing="0.5px"
        >
          {item.companyName}
        </Text>

        {/* Position */}
        <Text
          fontFamily="var(--font-body)"
          fontSize={{ base: "12px", md: "13px" }}
          fontWeight="500"
          color="#666"
          letterSpacing="0.5px"
          fontStyle="italic"
        >
          {item.position}
        </Text>

        {/* Thin divider */}
        <Box
          h="1px"
          w="40px"
          background="linear-gradient(90deg, #AD49E1, #D17EF5)"
          borderRadius="2px"
          my="1"
        />

        {/* Description */}
        <Text
          fontFamily="var(--font-body)"
          fontSize={{ base: "13px", md: "14px" }}
          lineHeight="1.7"
          color="#444"
          letterSpacing="0.3px"
          flex="1"
        >
          {item.workDesc}
        </Text>

        {/* Tech stacks */}
        <Flex gap="1.5" wrap="wrap" mt="3">
          {item.techStacks.map((skill) => (
            <motion.div
              key={skill}
              whileHover={prefersReducedMotion ? {} : { scale: 1.08, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Badge
                key={skill}
                px="2"
                py="0.5"
                borderRadius="full"
                fontSize="11px"
                fontFamily="var(--font-body)"
                fontWeight="600"
                letterSpacing="0.5px"
                background="rgba(173,73,225,0.08)"
                color="#8B2FC9"
                border="1px solid rgba(173,73,225,0.2)"
                style={{ textTransform: "none" }}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
};

// ── Section heading with animated underline ───────────────────────────────────
const SectionHeading = () => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Box ref={ref} textAlign="center" mb={{ base: "2.5rem", md: "3.5rem" }}>
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
          Projects I&apos;ve worked on
        </Heading>

        {/* Animated underline */}
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
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <Box
      id="section3"
      py={{ base: "3rem", md: "5rem" }}
      px={{ base: "1.5rem", sm: "2.5rem", md: "4rem", lg: "10%" }}
      backgroundColor="#fafafa"
    >
      <SectionHeading />

      {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "5", md: "6" }}
        maxW="1200px"
        mx="auto"
      >
        {workExperience.map((item, index) => (
          <ProjectCard key={item.key} item={item} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
