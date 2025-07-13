"use client";
import { Testimonials as AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useRef } from "react"; // useEffect is not needed for this approach
import { motion, Variants, useAnimation } from "framer-motion";
import ScrollFloat from "../ui/Scroll-float";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB3MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
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
    <div className="bg-black w-full flex flex-col items-center justify-center px-4 py-20 font-sans antialiased md:px-8 lg:px-12 min-h-screen z-10 relative">
      <motion.div
        className="text-6xl font-bold text-white dark:text-white text-center"
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
        className="mx-auto max-w-sm font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 !p-20"
        variants={fadeInOutVariants}
        initial="hidden" // Start hidden
        whileInView="visible" // Fade in when in view
        onViewportLeave={() => testimonialsControls.start("exit")} // Fade out when leaving view
        viewport={{ amount: 0.2, once: false }} // Trigger when 20% of testimonials is visible/invisible
        animate={testimonialsControls} // Animate using the specific controls
      >
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </div>
  );
}
