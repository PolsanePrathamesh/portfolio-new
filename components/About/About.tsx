"use client";

import { motion } from "framer-motion";
import { SkillCard } from "../ui/SkillCard";
import skillsData from "@/utils/json/skills/skills.json";
import Image from "next/image";
import { Cover } from "../ui/Cover";
import ScrollFloat from "../ui/Scroll-float";
import { WobbleCard } from "../ui/wobble-card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const About = () => {
  const { skills } = skillsData;
  const categories = Object.entries(skills);

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-black !p-20 text-white"
    >
      <div className=" mx-auto px-4">
        <div className="mx-auto">
          <div className="w-full flex justify-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Skills & Expertise
            </ScrollFloat>
          </div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {categories.map(([category, items]) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.h3
                  variants={fadeInUp}
                  className="text-2xl font-semibold text-gray-300 capitalize border-b border-gray-800 !pb-2 !mb-10"
                >
                  {category}
                </motion.h3>

                <div className="flex flex-wrap gap-4 items-center !mb-10">
                  {items.map((skill, index) => (
                    <SkillCard
                      key={`${category}-${skill.name}`}
                      skill={skill}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
