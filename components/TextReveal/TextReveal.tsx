"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center w-full">
      <TextRevealCard
        text="You know the business!"
        revealText="I know the chemistry!"
      >
        <TextRevealCardDescription className="!text-gray-400 !text-lg !max-w-2xl !mx-auto">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
