"use client";

import { motion } from "framer-motion";
import { WobbleCard } from "../ui/wobble-card";
import skillsData from "@/utils/json/skills/skills.json";
import Image from "next/image";
import { Cover } from "../ui/Cover";
import ScrollFloat from "../ui/Scroll-float";

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-center !mb-10">
                  {items.map((skill, index) => (
                    <motion.div
                      key={`${category}-${skill.name}`}
                      variants={fadeInUp}
                      className="h-full"
                    >
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
                          <motion.h4
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="text-lg font-medium text-gray-100 pr-2"
                          >
                            {skill.name}
                          </motion.h4>
                        </div>
                      </WobbleCard>
                    </motion.div>
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
