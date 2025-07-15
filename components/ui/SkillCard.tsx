"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { WobbleCard } from "./wobble-card";

const springConfig = { stiffness: 100, damping: 20 };

type Skill = {
  name: string;
  icon: string;
  color: string;
};

type SkillCardProps = {
  skill: Skill;
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useSpring(0, springConfig);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [10, -10]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const xPos = event.clientX - rect.left - rect.width / 2;
    x.set(xPos);
  };

  return (
    <div
      className="group lala relative h-full w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
            }}
            className="absolute !p-2 border border-white/20 -top-16 left-1/2 z-50 min-w-[120px] -translate-x-1/2 transform rounded-md bg-black/90 px-3 py-2 text-center shadow-lg backdrop-blur-sm"
          >
            <div className="text-sm font-semibold text-white">{skill.name}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <WobbleCard
        containerClassName="h-full min-h-[80px] bg-gray-900/80 hover:bg-gray-900 transition-colors duration-300 border border-gray-800/50 hover:border-gray-700/50"
        className="h-full"
      >
        <div className="flex items-center justify-between h-full !p-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="relative h-12 w-12 flex-shrink-0 bg-gray-800/50 rounded-lg flex items-center justify-center !p-2 transition-all duration-300"
            style={{
              boxShadow: `0 0 15px 5px ${skill.color}80`,
              transition: "box-shadow 0.3s ease-in-out",
            }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              className="rounded-sm transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </WobbleCard>
    </div>
  );
};
