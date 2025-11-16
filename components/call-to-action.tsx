'use client';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CallToAction() {
  const words = [
    { text: "Break", className: "text-white" },
    { text: "Language", className: "text-white" },
    { text: "Barriers", className: "text-white" },
    { text: "Instantly", className: "text-blue-400" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 font-light text-white antialiased md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-6">
          <TypewriterEffectSmooth 
            words={words} 
            className="justify-center text-2xl md:text-4xl"
            cursorClassName="bg-blue-400"
          />
          
          <p className="text-white/60 text-base max-w-2xl mx-auto md:text-lg">
            Translate any notice into 100+ languages with a simple QR code scan. 
            Perfect for hospitals, tourist spots, and public services.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:gap-6 md:mt-8">
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 md:px-8 md:py-6 md:text-lg">
                Start Free Trial
              </Button>
            </Link>
            
            <Link href="/demo">
              <Button variant="outline" className="border-blue-400/40 text-white hover:bg-blue-500/20 px-6 py-4 text-base rounded-full transition-all duration-300 md:px-8 md:py-6 md:text-lg">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
