"use client";

import { motion } from "framer-motion";

interface Category {
  _id: string;
  title: string;
  description: string;
}

export default function BusinessGrid({ categories }: { categories: Category[] }) {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-12">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols md:grid-cols-2 border-t border-zinc-800">
          {categories.map((cat, index) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-zinc-800 p-10 md:p-20 hover:bg-zinc-900/50 transition-all group flex flex-col justify-between min-h-112.5"
            >
              <div>
                <span className="font-mono-tech block mb-12">
                  Business Unit / 0{index + 1}
                </span>
                <h2 className="group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {cat.title}
                </h2>
              </div>

              <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className="text-zinc-400 text-lg md:text-xl max-w-xs leading-relaxed">
                  {cat.description}
                </p>

                <div className="text-3xl font-light group-hover:rotate-45 transition-transform duration-300">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}