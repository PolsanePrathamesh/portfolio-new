"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  ...props
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}) => {
  return (
    <Tag
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5",
        containerClassName
      )}
      {...props}
    >
      <span
        className={cn(
          "group relative inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-transparent dark:bg-black dark:text-white",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    </Tag>
  );
};
