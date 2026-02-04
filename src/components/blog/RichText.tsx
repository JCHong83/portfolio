import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full aspect-video my-12 bg-zinc-100 overflow-hidden">
        <Image 
          src={urlFor(value).url()} 
          alt="Blog Image" 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-4xl uppercase font-black mt-16 mb-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl uppercase font-bold mt-12 mb-6">{children}</h3>,
    normal: ({ children }: any) => <p className="text-zinc-600 text-lg leading-relaxed mb-6">{children}</p>,
  },
};