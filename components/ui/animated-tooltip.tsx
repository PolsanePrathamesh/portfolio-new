"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const springConfig = { stiffness: 100, damping: 20 };

type SocialMediaItem = {
  id: number;
  name: string;
  designation: string;
  image: string;
  url: string;
};

type AnimatedTooltipProps = {
  items: SocialMediaItem[];
};

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <div className="flex items-center  !space-x-2">
      {items.map((item) => (
        <div
          className="group relative"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
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
                <div className="text-sm font-semibold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-gray-300">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block !p-2 transition-all duration-300 rounded-lg bg-white "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
