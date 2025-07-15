import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  // Update rect on mount, resize, and scroll
  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };
    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
      setIsInside(true);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none", position: "relative" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any; // MotionValue<number>
  y: any; // MotionValue<number>
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "#0ea5e9",
    "#737373",
    "#14b8a6",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#eab308",
  ];

  // Use motion template for reactive positioning with offset
  const tooltipTop = useMotionTemplate`calc(${y}px + 20px)`;
  const tooltipLeft = useMotionTemplate`calc(${x}px + 20px)`;

  return (
    <>
      {/* Main Pointer */}
      <motion.div
        className="absolute z-50 h-4 w-4 rounded-full"
        style={{
          top: y,
          left: x,
          pointerEvents: "none",
        }}
        initial={{ scale: 1, opacity: 0.5 }} // Start with some visibility
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { delay: 0.1 } }} // Delay exit
        transition={{ duration: 0.2 }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
      </motion.div>

      {/* Tooltip */}
      {title && (
        <motion.div
          className="absolute z-50 min-w-max"
          style={{
            top: tooltipTop,
            left: tooltipLeft,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10, transition: { delay: 0.1 } }} // Delay exit
          transition={{ duration: 0.2 }}
        >
          <div className="min-w-max rounded-full bg-neutral-200 px-3 py-1 text-xs whitespace-nowrap text-black">
            {title}
          </div>
        </motion.div>
      )}
    </>
  );
};
