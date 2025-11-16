'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Hospital, Building2, Plane, GraduationCap, Landmark, Factory, Store, Hotel } from 'lucide-react';

export default function TextLoop() {
  const places = [
    { icon: Hospital, text: 'Hospitals', color: 'text-blue-400' },
    { icon: Building2, text: 'Museums', color: 'text-cyan-400' },
    { icon: Plane, text: 'Tourist Places', color: 'text-blue-400' },
    { icon: GraduationCap, text: 'Colleges', color: 'text-cyan-400' },
    { icon: Landmark, text: 'Govt Offices', color: 'text-blue-400' },
    { icon: Factory, text: 'Factories', color: 'text-cyan-400' },
    { icon: Store, text: 'Retail Stores', color: 'text-blue-400' },
    { icon: Hotel, text: 'Hotels', color: 'text-cyan-400' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % places.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [places.length]);

  const CurrentIcon = places[currentIndex].icon;

  if (!isClient) {
    return (
      <section className="relative w-full overflow-hidden py-20 md:py-32 font-light text-white antialiased">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Trusted By Organizations <span className="text-blue-400">Worldwide</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Breaking language barriers across multiple industries and sectors
            </p>
          </div>

          {/* Static Text for Server Render */}
          <div className="flex items-center justify-center min-h-[120px]">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-blue-400">
                <Hospital className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-blue-400">
                Hospitals
              </h3>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {places.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0
                    ? 'bg-blue-400 w-8'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden py-16 font-light text-white antialiased md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl font-light mb-4 md:text-3xl md:mb-6">
            Trusted By Organizations <span className="text-blue-400">Worldwide</span>
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto md:text-lg">
            Breaking language barriers across multiple industries and sectors
          </p>
        </div>

        {/* Animated Text Loop */}
        <div className="flex items-center justify-center min-h-[100px] md:min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 md:gap-6"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className={`${places[currentIndex].color}`}
              >
                <CurrentIcon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
              </motion.div>
              <motion.h3
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className={`text-3xl font-bold ${places[currentIndex].color} md:text-5xl`}
              >
                {places[currentIndex].text}
              </motion.h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1 mt-8 md:gap-2 md:mt-12">
          {places.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 md:w-2 md:h-2 ${
                index === currentIndex
                  ? 'bg-blue-400 w-6 md:w-8'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to ${places[index].text}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}