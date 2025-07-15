"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView, easeInOut, Variants } from "framer-motion"; // Import easeInOut function
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextRevealCardPreview } from "@/components/TextReveal/TextReveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollFloat from "../ui/Scroll-float";
import { WorldGlobe } from "../WorldGlobe/WorldGlobe";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { LampContainer } from "../ui/lamp";

interface FormData {
  name: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:-", formData);
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

  // Animation variants for fade-in and fade-out
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut, // Use the imported easeInOut function
      },
    },
  };

  // Refs for independent inView detection
  const titleRef = useRef(null);
  const globeRef = useRef(null);
  const formRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: false });
  const isGlobeInView = useInView(globeRef, { once: false });
  const isFormInView = useInView(formRef, { once: false });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); // Set once: false for fade-out
  return (
    <div className="relative w-full py-12 md:py-24 bg-black !pb-5 z-10 !px-5">
      <div className="w-full mx-auto relative z-10 !px-4">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          className="text-6xl font-bold text-white !mb-8 text-center"
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Connect With Me
          </ScrollFloat>
        </motion.div>
        {/* Social Media Icons with Animated Tooltip */}
        <motion.div
          className="!m-8 flex justify-center "
          variants={childVariants}
        >
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
        <motion.div
          ref={sectionRef}
          className="flex flex-col md:flex-row gap-8 justify-center items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <TextRevealCardPreview />
        </motion.div>

        {/* Globe and Form Section */}
        <motion.div
          ref={globeRef}
          className="flex flex-col md:flex-row gap-8 justify-center items-start"
          initial="hidden"
          animate={isGlobeInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Globe (Left Side) */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[600px] rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <WorldGlobe />
          </motion.div>

          {/* Form (Right Side) */}
          <motion.div
            ref={formRef}
            className="bg-gray-950 w-full md:w-1/2 !rounded-3xl !p-8 !shadow-2xl !border !border-gray-800"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="!space-y-8">
              {/* Name field */}
              <motion.div className="!space-y-3" variants={itemVariants}>
                <Label
                  htmlFor="name"
                  className="!text-white !text-sm !font-medium !block !mb-2"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-black !border-gray-700 !text-white !placeholder-gray-400 !rounded-xl !h-14 !px-4 focus:!border-gray-600 focus:!ring-gray-600 !text-base !w-full"
                />
              </motion.div>

              {/* Service field */}
              <motion.div className="!space-y-3" variants={itemVariants}>
                <Label
                  htmlFor="service"
                  className="!text-white !text-sm !font-medium !block !mb-2"
                >
                  Service you need
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="bg-black !border-gray-700 !text-white !rounded-xl !h-14 !px-4 focus:!border-gray-600 focus:!ring-gray-600 !text-base !w-full">
                    <SelectValue
                      placeholder="Select"
                      className="!text-gray-400 !text-base"
                    />
                  </SelectTrigger>
                  <SelectContent className="!bg-black !border-gray-700 !rounded-xl !py-2 !px-1">
                    <SelectItem
                      value="web-design"
                      className="!bg-black !text-white hover:!bg-gray-800 !py-3 !px-4 !my-1 !rounded-lg !text-base !cursor-pointer"
                    >
                      Web Design
                    </SelectItem>
                    <SelectItem
                      value="web-development"
                      className="!bg-black !text-white hover:!bg-gray-800 !py-3 !px-4 !my-1 !rounded-lg !text-base !cursor-pointer"
                    >
                      Web Development
                    </SelectItem>
                    <SelectItem
                      value="mobile-app"
                      className="!bg-black !text-white hover:!bg-gray-800 !py-3 !px-4 !my-1 !rounded-lg !text-base !cursor-pointer"
                    >
                      Mobile App
                    </SelectItem>
                    <SelectItem
                      value="branding"
                      className="!bg-black !text-white hover:!bg-gray-800 !py-3 !px-4 !my-1 !rounded-lg !text-base !cursor-pointer"
                    >
                      Branding
                    </SelectItem>
                    <SelectItem
                      value="consulting"
                      className="!bg-black !text-white hover:!bg-gray-800 !py-3 !px-4 !my-1 !rounded-lg !text-base !cursor-pointer"
                    >
                      Consulting
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Budget field */}
              <motion.div className="!space-y-3" variants={itemVariants}>
                <Label
                  htmlFor="budget"
                  className="!text-white !text-sm !font-medium !block !mb-2"
                >
                  What budget do you have available
                </Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="bg-black !border-gray-700 !text-white !placeholder-gray-400 !rounded-xl !h-14 !px-4 focus:!border-gray-600 focus:!ring-gray-600 !text-base !w-full"
                />
              </motion.div>

              {/* Message field */}
              <motion.div className="!space-y-3" variants={itemVariants}>
                <Label
                  htmlFor="message"
                  className="!text-white !text-sm !font-medium !block !mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Please tell us about your project and what you need."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-black !border-gray-700 !text-white !placeholder-gray-400 !rounded-xl !min-h-[140px] !p-4 !resize-none focus:!border-gray-600 focus:!ring-gray-600 !text-base !w-full"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="!w-full !bg-white !text-black hover:!bg-gray-100 !rounded-xl !h-14 !font-medium !mt-10 !text-base !py-6 transition-all duration-200 hover:!scale-[1.02]"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
