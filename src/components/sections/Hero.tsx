"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section-padding min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-350 mx-auto w-full">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono-tech mb-6 block">
            Innovation Hub 2026
          </span>
          <h1>
            Digital <br />
            <span className="text-zinc-300">Displays</span> <br />
            & Ventures
          </h1>
        </motion.div>
      </div>
    </section>
  );
}