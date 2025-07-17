"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useRef } from "react"; // useEffect is not needed for this approach
import { motion, Variants, useAnimation } from "framer-motion";
import ScrollFloat from "../ui/Scroll-float";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Prathamesh's expertise in React.js and TypeScript transformed our project with a seamless and scalable user interface.",
      name: "Rajesh Sharma",
      designation: "Senior Developer at Tech Innovations",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "His innovative approach with Next.js and Vue.js exceeded our expectations, delivering a highly performant web application.",
      name: "Anita Desai",
      designation: "Project Manager at WebSolutions",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Prathamesh's attention to detail in CSS and JavaScript made our complex tasks intuitive and user-friendly.",
      name: "Vikram Patel",
      designation: "CTO at Digital Creations",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The robust features he implemented using Node.js have significantly boosted our team's productivity.",
      name: "Priya Kapoor",
      designation: "Engineering Lead at CodeCrafters",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "His ability to architect scalable solutions with modern frameworks has been a game-changer for our growing business.",
      name: "Suresh Nair",
      designation: "VP of Technology at NextGen Tech",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Controls for the heading animation
  const headingControls = useAnimation();
  // Controls for the testimonials content animation
  const testimonialsControls = useAnimation();

  // Define fade animation variants for elements that fade in/out
  const fadeInOutVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Slightly longer duration for smoother fade
        ease: "easeOut", // Smoother easing
      },
    },
    exit: {
      opacity: 0,
      y: -20, // Move slightly up when fading out
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // The parent div is no longer a motion.div
  return (
    <div className="bg-black w-full flex flex-col items-center justify-center px-4 py-2 font-sans antialiased md:px-8 lg:px-12 min-h-screen z-10 relative">
      <motion.div
        className="text-6xl font-bold text-white dark:text-white text-center mb-5"
        variants={fadeInOutVariants}
        initial="hidden" // Start hidden
        whileInView="visible" // Fade in when in view
        onViewportLeave={() => headingControls.start("exit")} // Fade out when leaving view
        viewport={{ amount: 0.5, once: false }} // Trigger when 50% of heading is visible/invisible
        animate={headingControls} // Animate using the specific controls
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Testimonials
        </ScrollFloat>
      </motion.div>

      <motion.div
        className="mx-auto font-sans antialiased  md:px-8 lg:px-12 !p-2"
        variants={fadeInOutVariants}
        initial="hidden" // Start hidden
        whileInView="visible" // Fade in when in view
        onViewportLeave={() => testimonialsControls.start("exit")} // Fade out when leaving view
        viewport={{ amount: 0.2, once: false }} // Trigger when 20% of testimonials is visible/invisible
        animate={testimonialsControls} // Animate using the specific controls
      >
        <InfiniteMovingCards
          items={testimonials.map((t) => ({
            quote: t.quote,
            name: t.name,
            title: t.designation,
          }))}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
