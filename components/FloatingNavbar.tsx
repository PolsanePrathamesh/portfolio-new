"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Code,
  Clock,
  MessageSquare,
  Phone,
  History,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

export const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "home", link: "/#home", icon: <Home className="w-5 h-5" /> },
    {
      name: "projects",
      link: "/#projects",
      icon: <Briefcase className="w-5 h-5" />,
    },
    { name: "skills", link: "/#skills", icon: <Code className="w-5 h-5" /> },
    {
      name: "experience",
      link: "/#experience",
      icon: <History className="w-5 h-5" />,
    },
    {
      name: "testimonials",
      link: "/#testimonials",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      name: "contact",
      link: "/#contact",
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems.map((item) => document.getElementById(item.name));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Don't show on project detail pages
  if (pathname.startsWith("/projects/")) {
    return null;
  }

  // Track scroll position for hero section
  const [isPastHero, setIsPastHero] = useState(false);
  const { scrollY } = useScroll();
  const heroSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get hero section height once component mounts
    heroSectionRef.current = document.getElementById("home");

    // Initial check
    const checkHeroSection = () => {
      if (!heroSectionRef.current) return;
      const heroHeight = heroSectionRef.current.offsetHeight;
      setIsPastHero(window.scrollY > heroHeight * 0.7);
    };

    checkHeroSection();

    // Check on resize in case hero height changes
    const handleResize = () => {
      checkHeroSection();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update visibility based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname !== "/" || !heroSectionRef.current) return;

    const heroHeight = heroSectionRef.current.offsetHeight;
    const shouldBeVisible = latest > heroHeight * 0.7;
    setIsPastHero(shouldBeVisible);
  });

  // Don't show on project detail pages
  if (pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isPastHero ? 0 : 100,
        opacity: isPastHero ? "0.9" : 0,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
        "transition-all duration-300",
        !isPastHero && "pointer-events-none",
        "will-change-transform"
      )}
    >
      <div className="flex items-center justify-center gap-4 px-8 py-1 bg-black/80 backdrop-blur-lg rounded-full border border-gray-800 shadow-lg">
        {navItems.map((item) => {
          const isActive = activeSection === item.name;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300",
                "flex flex-col items-center group",
                "hover:scale-110 active:scale-95",
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
              )}
              onClick={(e) => {
                if (pathname === "/" && item.link.startsWith("#")) {
                  e.preventDefault();
                  const element = document.getElementById(item.name);
                  element?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2"
                        layoutId="activeDot"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <div
                    className={cn(
                      "relative z-10 transition-transform duration-300",
                      isActive ? "translate-y-[-2px]" : ""
                    )}
                  >
                    {item.icon}
                  </div>
                </div>
                <motion.span
                  className={cn(
                    "text-[12px] mt-2 capitalize transition-colors duration-300",
                    isActive ? "text-white font-bold block" : "hidden",
                    "relative"
                  )}
                >
                  {item.name}
                </motion.span>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
