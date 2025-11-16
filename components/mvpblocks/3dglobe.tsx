'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Globe3D() {
  const problemRef = useRef(null);
  const isInView = useInView(problemRef, { once: true, amount: 0.2 });

  const problems = [
    {
      number: '1',
      title: 'Language Barriers Everywhere',
      description: 'Public instructions are often written only in one local language, making it hard for outsiders to understand.'
    },
    {
      number: '2',
      title: 'Important Information Missed',
      description: 'People fail to understand medical instructions, tourist details, or office guidelines — leading to confusion and mistakes.'
    },
    {
      number: '3',
      title: 'No Standard Multilingual System',
      description: 'Hospitals, tourist spots, and offices don\'t have a simple way to provide multi-language information to visitors.'
    },
    {
      number: '4',
      title: 'Manual Translation Is Slow & Costly',
      description: 'Hiring translators or rewriting signs in multiple languages is time-consuming, expensive, and hard to maintain.'
    }
  ];

  return (
    <>
    <section className="relative w-full overflow-hidden pt-40 pb-10 font-light text-white antialiased md:pt-32 md:pb-16">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-900/20 to-transparent" />
      
      {/* Animated blue glow effects */}
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(10, 15, 30, 0) 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(10, 15, 30, 0) 60%)',
        }}
      />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Floating 3D cards near heading */}
          <motion.div
            className="absolute -left-20 top-10 hidden md:block"
            initial={{ y: 0, rotateY: 0 }}
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-52 h-52 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 p-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
              <img
                src="/country.png"
                alt="Multi-language flags"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-20 top-10 hidden md:block"
            initial={{ y: 0, rotateY: 0 }}
            animate={{
              y: [0, 20, 0],
              rotateY: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <div className="w-52 h-52 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 p-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
              <img
                src="/instruction .png"
                alt="Patient care instructions"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-16 top-72 hidden md:block"
            initial={{ y: 0, rotateZ: 0 }}
            animate={{
              y: [0, -15, 0],
              rotateZ: [0, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <div className="w-52 h-52 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 backdrop-blur-sm border border-blue-400/20 p-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
              <img
                src="/letter.jpg"
                alt="Multi-language text"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-16 top-72 hidden md:block"
            initial={{ y: 0, rotateZ: 0 }}
            animate={{
              y: [0, 15, 0],
              rotateZ: [0, -5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          >
            <div className="w-52 h-52 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 p-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
              <img
                src="/scan qr.jpg"
                alt="Scan QR code"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <span className="mb-6 inline-block rounded-full border border-blue-500/30 px-3 py-1 text-xs text-blue-400">
            AI-POWERED TRANSLATION SYSTEM
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Understand Any Text Instantly {' '}
            <span className="text-blue-400">Just Scan the QR</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            AI-powered translations for hospitals, tourist places, and public services.
            Generate multi-language QR codes in seconds using our intelligent notice system.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              prefetch={false}
              href="/docs/get-started"
              className="hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-blue-500/30 sm:w-auto"
            >
              Generate QR
            </Link>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>How it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Globe Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Main Globe */}
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <img
              src="https://i.postimg.cc/5NwYwdTn/earth.webp"
              alt="Earth"
              className="absolute top-0 left-1/2 -z-10 mx-auto -translate-x-1/2 px-4 opacity-80"
            />
          </div>
          
          {/* Video Preview */}
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-full rounded-lg border border-blue-500/20"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Problem Section */}
    <section ref={problemRef} className="relative w-full overflow-hidden py-20 md:py-32 font-light text-white antialiased">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Public information is <span className="text-blue-400">not accessible</span> for everyone
          </h2>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-900/10 backdrop-blur-sm border border-blue-400/20 p-6 md:p-8 shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:border-blue-400/40">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xl font-bold shadow-lg">
                  {problem.number}
                </div>
                
                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
