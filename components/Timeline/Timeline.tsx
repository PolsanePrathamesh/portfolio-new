import React from "react";
import { TimelineReveal } from "../ui/timeline-reveal";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export function TimelineDemo({
  timelineData,
}: {
  timelineData: TimelineItem[];
}) {
  return (
    <div className="w-full  mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <TimelineReveal data={timelineData} />
    </div>
  );
}
