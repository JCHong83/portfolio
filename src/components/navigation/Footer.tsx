import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 pt-24 pb-12 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          
          {/* Big CTA */}
          <div>
            <span className="font-mono-tech mb-8 block">Have a project?</span>
            <h2 className="text-5xl md:text-7xl mb-12">Let's build <br/> something <span className="text-zinc-400">real.</span></h2>
            <Link href="/contact" className="inline-block border-b-2 border-black pb-2 font-bold uppercase tracking-widest hover:text-zinc-500 hover:border-zinc-500 transition-all">
              Start a conversation
            </Link>
          </div>
          
          {/* Info Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-mono-tech text-zinc-400">Navigation</span>
              <Link href="/about" className="hover:underline">About Me</Link>
              <Link href="/blog" className="hover:underline">Insights</Link>
              <Link href="/#what-we-do" className="hover:underline">Services</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono-tech text-zinc-400">Social</span>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">X / Twitter</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between gap-6 font-mono-tech text-[10px]">
          <p>© 2026 Visionary Digital Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Loc. Italy</p>
            <p>Time. 16:41 CET</p>
          </div>
        </div>
      </div>
    </footer>
  );
}