"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, Loader2 } from "lucide-react";

type ButtonState = "idle" | "loading" | "success";

export function ResumeButton() {
  const [state, setState] = useState<ButtonState>("idle");

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

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.button
        onClick={handleDownload}
        disabled={state !== "idle"}
        className={cn(
          "relative overflow-hidden bg-gradient-to-r bg-blue-500  text-white font-semibold !py-1 !px-2 rounded-full shadow-lg",
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
