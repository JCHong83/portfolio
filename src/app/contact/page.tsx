"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 md:px-12 pt-40 pb-32">
        <div className="max-w-350 mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            
            {/* LEFT COLUMN: Info & Socials */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="font-mono-tech mb-8 block text-zinc-400"
                >
                  Contact — Inquiry
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="text-zinc-900 leading-[0.8] mb-12 uppercase"
                >
                  Let's <br /> <span className="text-zinc-300">Connect</span>
                </motion.h1>
                
                <div className="space-y-12 mt-20">
                  {/* Email & Phone */}
                  <div>
                    <span className="font-mono-tech text-[10px] text-zinc-400 uppercase block mb-4">Direct</span>
                    <a href="mailto:hello@visionary.com" className="text-2xl md:text-3xl font-bold hover:text-zinc-500 transition-colors">hello@visionary.com</a>
                    <p className="text-xl text-zinc-600 mt-2">+39 123 456 7890</p>
                  </div>

                  {/* Location */}
                  <div>
                    <span className="font-mono-tech text-[10px] text-zinc-400 uppercase block mb-4">Location</span>
                    <p className="text-xl text-zinc-600">Milan, Italy <br /> Remote Worldwide</p>
                  </div>

                  {/* Socials */}
                  <div>
                    <span className="font-mono-tech text-[10px] text-zinc-400 uppercase block mb-4">Social Ecosystem</span>
                    <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
                      <a href="#" className="hover:underline hover:text-zinc-400 transition-all">LinkedIn</a>
                      <a href="#" className="hover:underline hover:text-zinc-400 transition-all">Instagram</a>
                      <a href="#" className="hover:underline hover:text-zinc-400 transition-all">X / Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Luxury Form */}
            <div className="md:col-span-7 pt-4">
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2 border-b border-zinc-200 pb-4 focus-within:border-black transition-all">
                    <label className="font-mono-tech text-[9px] text-zinc-400 uppercase">Full Name</label>
                    <input type="text" placeholder="John Doe" className="bg-transparent text-xl outline-none placeholder:text-zinc-200" />
                  </div>
                  <div className="flex flex-col gap-2 border-b border-zinc-200 pb-4 focus-within:border-black transition-all">
                    <label className="font-mono-tech text-[9px] text-zinc-400 uppercase">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="bg-transparent text-xl outline-none placeholder:text-zinc-200" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-b border-zinc-200 pb-4 focus-within:border-black transition-all">
                  <label className="font-mono-tech text-[9px] text-zinc-400 uppercase">Subject / Service</label>
                  <select className="bg-transparent text-xl outline-none appearance-none cursor-pointer">
                    <option>Transparent LCD Systems</option>
                    <option>LEDWALL Installation</option>
                    <option>SaaS / Startup Building</option>
                    <option>General Collaboration</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 border-b border-zinc-200 pb-4 focus-within:border-black transition-all">
                  <label className="font-mono-tech text-[9px] text-zinc-400 uppercase">Message</label>
                  <textarea rows={4} placeholder="Tell me about your vision..." className="bg-transparent text-xl outline-none placeholder:text-zinc-200 resize-none" />
                </div>

                <button type="submit" className="group flex items-center gap-4 bg-black text-white px-12 py-6 uppercase font-bold tracking-[0.2em] hover:bg-zinc-800 transition-all">
                  Send Inquiry 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}