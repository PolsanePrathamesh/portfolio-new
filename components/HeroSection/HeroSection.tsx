"use client";
import { useCallback, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Hyperspeed from "@/Hyperspeed/Hyperspeed";
import VariableProximity from "@/VariableProximity/VariableProximity";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import Lanyard from "../lanyard/Lanyard";
import { FlipWords } from "../ui/flip-wrds";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const HeroSection = () => {
  const [isSpeedingUp, setIsSpeedingUp] = useState(false);
  const [startTypewriter, setStartTypewriter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Fade out effect based on scroll position
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);

  const handleSpeedUp = useCallback(() => {
    document.body.style.cursor = "grabbing";
    setIsSpeedingUp(true);
  }, []);

  const handleSlowDown = useCallback(() => {
    document.body.style.cursor = "";
    setIsSpeedingUp(false);
  }, []);

  // Animation variants for the parent container
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for child elements with bounce effect
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.8,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative z-10 min-h-screen w-full">
      <div className="fixed inset-0 -z-[20]">
        <div
          className="absolute inset-0 w-full h-full"
          onMouseDown={handleSpeedUp}
          onMouseUp={handleSlowDown}
          onMouseLeave={handleSlowDown}
        >
          <Hyperspeed
            effectOptions={{
              isHyper: true,
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 12,
              islandWidth: 1.5,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: isSpeedingUp ? 3 : 1,
              carLightsFade: 0.3,
              totalSideLightSticks: 15,
              lightPairsPerRoadWay: 30,
              shoulderLinesWidthPercentage: 0.06,
              brokenLinesWidthPercentage: 0.08,
              brokenLinesLengthPercentage: 0.7,
              lightStickWidth: [0.1, 0.3],
              lightStickHeight: [1.2, 1.5],
              movingAwaySpeed: [50, 70],
              movingCloserSpeed: [-100, -140],
              carLightsLength: [400 * 0.04, 400 * 0.15],
              carLightsRadius: [0.04, 0.12],
              carWidthPercentage: [0.4, 0.6],
              carShiftX: [-0.5, 0.5],
              carFloorSeparation: [0.1, 1],
              colors: {
                roadColor: 0x000000,
                islandColor: 0x1a1a1a,
                background: 0x1a1a2e,
                shoulderLines: 0xffffff,
                brokenLines: 0xffff00,
                leftCars: [0xff6b6b, 0xff9e7d, 0xffb88c],
                rightCars: [0x70a1ff, 0x7f8fa6, 0x95a5a6],
                sticks: 0x4b7bec,
              },
            }}
          />
        </div>
      </div>
      <div className="flex h-full w-full">
        {/* Right side - ID Card (35%) */}
        <div className="absolute left-0 w-full h-screen z-1 ">
          <div className="absolute left-0 top-0 bottom-0 w-full">
            <Lanyard />
          </div>
        </div>

        {/* Left side - Text Content (65%) */}
        <div className="flex w-[65%] items-center justify-center !pl-5 z-4 min-h-screen">
          <motion.div
            ref={containerRef}
            className="w-full px-8 text-white"
            style={{ opacity, scale }}
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setStartTypewriter(true)}
          >
            <motion.div className="space-y-2 !pl-10" variants={childVariants}>
              <motion.h3
                className="text-2xl font-bold !pl-1"
                variants={childVariants}
              >
                <VariableProximity
                  label="Hello, I'm"
                  className="block"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                  style={{
                    fontFamily: "var(--font-inter)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                  }}
                />
              </motion.h3>
              <motion.h1
                className="mb-8 text-4xl font-bold md:text-6xl lg:text-7xl"
                variants={childVariants}
              >
                <VariableProximity
                  label="Prathamesh Polsane"
                  className="block"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={200}
                  falloff="linear"
                  style={{
                    fontFamily: "var(--font-inter)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                  }}
                />
              </motion.h1>

              <motion.div
                className="mt-12 space-y-1 text-left"
                variants={childVariants}
              >
                <div className="!text-4xl mx-auto font-normal text-gray-300 md:text-3xl">
                  <VariableProximity
                    label="I am a "
                    className="block"
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={200}
                    falloff="linear"
                    style={{
                      fontFamily: "var(--font-inter)",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                    }}
                  />
                  <FlipWords
                    words={[
                      "Innovative",
                      "Efficient",
                      "User-focused",
                      "Impactful",
                    ]}
                  />{" "}
                  <VariableProximity
                    label="Software Developer"
                    className="block"
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={200}
                    falloff="linear"
                    style={{
                      fontFamily: "var(--font-inter)",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                    }}
                  />
                </div>

                {/* Social Media Icons with Animated Tooltip */}
                <motion.div className="!mt-8" variants={childVariants}>
                  <AnimatedTooltip
                    items={[
                      {
                        id: 1,
                        name: "GitHub",
                        designation: "@PolsanePrathamesh",
                        image: "/icons/github.svg",
                        url: "https://github.com/PolsanePrathamesh",
                      },
                      {
                        id: 2,
                        name: "LinkedIn",
                        designation: "@prathamesh-polsane",
                        image: "/icons/linkedIn.svg",
                        url: "https://linkedin.com/in/prathamesh-polsane",
                      },
                      {
                        id: 3,
                        name: "Medium",
                        designation: "@prathameshpolsane",
                        image: "/icons/medium.svg",
                        url: "https://medium.com/@prathameshpolsane",
                      },
                      {
                        id: 4,
                        name: "Dribbble",
                        designation: "@Prathamesh26",
                        image: "/icons/dribbble.svg",
                        url: "https://dribbble.com/Prathamesh26",
                      },
                      {
                        id: 5,
                        name: "Email",
                        designation: "prathameshpolsane@gmail.com",
                        image: "/icons/gmail.svg",
                        url: "mailto:prathameshpolsane@gmail.com",
                      },
                    ]}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
