"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion as Motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <Motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text="Sumérgete en "
          words={["El Romance", " La Comedia", "El Drama", " La Aventura"]}
        />
      </Motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p>
    </div>
  );
}
