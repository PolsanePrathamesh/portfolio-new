"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2, Check, ArrowUp } from "lucide-react";

type ButtonState = "idle" | "loading" | "success" | "error";

export const ResumeButton = () => {
  const [state, setState] = useState<ButtonState>("idle");

  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = async () => {
    try {
      setState("loading");

      // Simulate network delay for demo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Actual download logic
      const resumeUrl = "/Resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "PrathameshPolsane.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setState("success");
      // Reset to idle after 2 seconds
      setTimeout(() => setState("idle"), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setState("idle");
    }
  };

  const getButtonContent = () => {
    switch (state) {
      case "loading":
        return (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Preparing...</span>
          </>
        );
      case "success":
        return (
          <>
            <Check className="w-5 h-5" />
            <span>Downloaded!</span>
          </>
        );
      default:
        return (
          <>
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </>
        );
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-end"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm text-white shadow-lg hover:bg-gray-700/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleDownload}
        disabled={state !== "idle"}
        className={cn(
          "relative overflow-hidden bg-gradient-to-r bg-blue-500  text-white font-semibold !py-1.5 !px-4 rounded-full shadow-lg",
          "flex items-center gap-3 whitespace-nowrap",
          "transform transition-all duration-300",
          state === "idle" &&
            "hover:from-blue-700 hover:to-blue-900 hover:shadow-xl hover:scale-105",
          state === "success" && "bg-green-600 hover:bg-green-700",
          "disabled:opacity-90 disabled:cursor-not-allowed"
        )}
        whileTap={state === "idle" ? { scale: 0.95 } : {}}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={state}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            {getButtonContent()}
          </motion.span>
        </AnimatePresence>

        {/* Animated background for loading state */}
        {state === "loading" && (
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-white/30"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
          />
        )}
      </motion.button>
    </motion.div>
  );
}

// Helper function to merge class names
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
