"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion"; // Import easeInOut
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

  // Ref for inView detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); // Set once: false for fade-out

  return (
    <div className="relative w-full py-12 md:py-24 bg-black !pb-5">
      <div className="w-full mx-auto relative z-10 px-4">
        <motion.h2
          ref={sectionRef}
          className="text-6xl font-bold text-white !mb-8 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          Contact Us{" "}
        </motion.h2>
        <motion.div
          ref={sectionRef}
          className="flex flex-col md:flex-row gap-8 justify-center items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <TextRevealCardPreview />
        </motion.div>
        <motion.div
          ref={sectionRef}
          className="flex flex-col md:flex-row gap-8 justify-center items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Contact Card (Left Side) */}
          <motion.div
            data-slot="card"
            className="bg-gray-950 text-card-foreground gap-6 rounded-xl border !p-6 !glass-strong border-white/10 shadow-2xl h-full flex flex-col w-full md:w-1/3"
            variants={itemVariants}
          >
            <div data-slot="card-content" className="px-8 gap-6 flex-grow">
              <h3 className="text-xl font-semibold text-white !mb-6">
                Get In Touch
              </h3>
              <div className="!space-y-4">
                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  variants={itemVariants}
                >
                  <div className="!p-3 bg-[#ff453a]/20 rounded-xl transition-all duration-200 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail w-5 h-5 text-[#ff453a]"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      target="_blank"
                      className="text-white group-hover:text-[#34c759] transition-colors duration-200 break-all"
                      href="mailto:prathameshpolsane@gmail.com"
                    >
                      prathameshpolsane@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  variants={itemVariants}
                >
                  <div className="!p-3 bg-[#ff9500]/20 rounded-xl transition-all duration-200 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-5 h-5 text-[#ff9500]"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white group-hover:text-[#34c759] transition-colors duration-200 break-all">
                      Mumbai, India
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  variants={itemVariants}
                >
                  <div className="!p-3 bg-[#007aff]/20 rounded-xl transition-all duration-200 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin w-5 h-5 text-[#007aff]"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      target="_blank"
                      className="text-white group-hover:text-[#34c759] transition-colors duration-200 break-all"
                      href="https://linkedin.com/in/prathamesh-polsane"
                    >
                      linkedin.com/in/prathamesh-polsane
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 group cursor-pointer"
                  variants={itemVariants}
                >
                  <div className="!p-3 bg-[#ffffff]/50 rounded-xl transition-all duration-200 group-hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Medium</p>
                    <a
                      target="_blank"
                      className="text-white group-hover:text-[#34c759] transition-colors duration-200 break-all"
                      href="https://medium.com/@prathameshpolsane"
                    >
                      @prathameshpolsane
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Form (Right Side) */}
          <motion.div
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
