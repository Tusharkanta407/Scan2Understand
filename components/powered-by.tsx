'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PoweredBy() {
  return (
    <section className="relative w-full overflow-hidden py-12 font-light text-white antialiased md:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-xl font-light md:text-2xl">
            Powered by <span className="text-blue-400">Advanced Technology</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-6 mt-6 md:flex-row md:gap-8 md:mt-8">
            <div className="flex items-center justify-center">
              <Link 
                href="https://lingo.dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-14 md:w-48 md:h-16">
                  <Image
                    src="/lingo.webp"
                    alt="Lingo.dev"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-white/70 text-base max-w-md md:text-lg">
                Our AI translation engine is powered by Lingo.dev, 
                delivering accurate, context-aware translations in 100+ languages.
              </p>
              <Link 
                href="https://lingo.dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:mt-4 md:text-base"
              >
                Learn more about Lingo.dev →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
