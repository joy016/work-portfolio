"use client";

import { Avatar, Box, Flex } from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const MotionFlex = motion.create(Flex);
const MotionBox = motion.create(Box);

const navItems = [
  { id: "section1", href: "#section1", label: "About" },
  { id: "section2", href: "#section2", label: "Work Experience" },
  { id: "section3", href: "#section3", label: "Projects" },
  { id: "section4", href: "#section4", label: "Contact" },
];

// Animated hamburger / close icon
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <Box w="24px" h="18px" position="relative" cursor="pointer">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        style={{
          display: "block",
          position: "absolute",
          height: "2px",
          width: "100%",
          background: "#AD49E1",
          borderRadius: "2px",
          left: 0,
          transformOrigin: "center",
        }}
        animate={
          isOpen
            ? {
                top: i === 0 ? "8px" : i === 2 ? "8px" : "8px",
                rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                opacity: i === 1 ? 0 : 1,
              }
            : {
                top: i === 0 ? "0px" : i === 1 ? "8px" : "16px",
                rotate: 0,
                opacity: 1,
              }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
  </Box>
);

const Header = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("section1");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 24px rgba(173,73,225,0.10)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const navContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const logoVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.7,
      rotate: prefersReducedMotion ? 0 : -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
    },
  };

  // Mobile drawer variants
  const drawerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -16,
      pointerEvents: "none" as const,
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -10,
      pointerEvents: "none" as const,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const mobileNavItemVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.07,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <MotionFlex
        justify="space-between"
        alignItems="center"
        px={{ base: "1.5rem", sm: "2rem", md: "4rem", lg: "8rem" }}
        py="1.5rem"
        position="sticky"
        top="0"
        zIndex="100"
        style={{ boxShadow }}
        backgroundColor={
          isScrolled ? "rgba(226, 236, 222, 0.88)" : "rgba(226, 236, 222, 0.6)"
        }
        backdropFilter={isScrolled ? "blur(14px)" : "blur(4px)"}
        transition="background-color 0.3s ease"
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={logoVariants}>
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{ cursor: "pointer" }}
          >
            <Avatar.Root>
              <Avatar.Fallback name="Edijoy Lejas" />
            </Avatar.Root>
          </motion.div>
        </motion.div>

        {/* Desktop nav */}
        <MotionFlex
          display={{ base: "none", md: "flex" }}
          gap="8"
          variants={navContainerVariants}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <MotionBox key={item.id} variants={navItemVariants}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    style={{ position: "relative" }}
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Box
                      fontFamily="var(--font-heading)"
                      fontSize={{ md: "15px", lg: "18px" }}
                      letterSpacing="2px"
                      fontWeight="600"
                      color={isActive ? "#8B2FC9" : "#AD49E1"}
                      position="relative"
                      pb="1"
                    >
                      {item.label}
                      <motion.div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          height: "2px",
                          background:
                            "linear-gradient(90deg, #AD49E1, #D17EF5)",
                          borderRadius: "2px",
                          originX: 0,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={
                          prefersReducedMotion
                            ? {}
                            : { scaleX: isActive ? 1 : 0 }
                        }
                        whileHover={prefersReducedMotion ? {} : { scaleX: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    </Box>
                  </motion.div>
                </Link>
              </MotionBox>
            );
          })}
        </MotionFlex>

        {/* Hamburger button — mobile only */}
        <Box
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="center"
          w="40px"
          h="40px"
          cursor="pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon isOpen={menuOpen} />
        </Box>
      </MotionFlex>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: "72px", // below the header
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "rgba(226, 236, 222, 0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(173,73,225,0.15)",
              padding: "1.5rem 2rem 2rem",
              boxShadow: "0 8px 32px rgba(173,73,225,0.10)",
            }}
          >
            <Flex flexDirection="column" gap="6">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={mobileNavItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        fontFamily="var(--font-heading)"
                        fontSize="20px"
                        letterSpacing="2px"
                        fontWeight="600"
                        color={isActive ? "#8B2FC9" : "#AD49E1"}
                        py="0.5rem"
                        borderBottom={
                          isActive
                            ? "2px solid #AD49E1"
                            : "2px solid transparent"
                        }
                        transition="all 0.2s ease"
                        _hover={{ color: "#8B2FC9", pl: "4px" }}
                      >
                        {item.label}
                      </Box>
                    </Link>
                  </motion.div>
                );
              })}
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
