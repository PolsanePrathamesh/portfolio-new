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
    <div className="w-full  mx-auto py-6 px-4 z-10 bg-black relative">
      <TimelineReveal data={timelineData} />
    </div>
  );
}
