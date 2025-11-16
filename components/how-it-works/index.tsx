"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HowItWorks() {
  // Refs for scroll triggering
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create a account and fill your details and Your Instruction for specific Instruction ",
      color: "from-blue-500 to-blue-700",
      image: "/first.jpg",
      icon: "/icons/signup.svg", 
    },
    {
      number: "02",
      title: "Create A QR",
      description: "Your Text Is Translate with mainy Languages and Get a qr for the Instruction",
      color: "from-cyan-500 to-blue-500",
      image: "/scan-qr.jpg",
      icon: "/icons/configure.svg",
    },
    {
      number: "03",
      title: "Paste it on Notice Board ",
      description: "People Scan it who ever is not understand the Instruction in the languge",
      color: "from-blue-500 to-cyan-500",
      image: "/instruction .png",
      icon: "/icons/import.svg",
    },
    {
      number: "04",
      title: "Select Language and Read",
      description: "After People Scan They choose their Langiage and Read",
      color: "from-blue-500 to-cyan-500",
      image: "/scan-man.jpg",
      icon: "/icons/launch.svg",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950" ref={sectionRef}>
      {/* Background elements - floating gradient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-xl"
            style={{
              width: `${50 + (i % 5) * 20}px`,
              height: `${50 + (i % 3) * 20}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i % 10)],
              y: [0, (i % 2 === 0 ? -1 : 1) * (20 + i % 10)],
            }}
            transition={{
              duration: 20 + (i % 10),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.5 0H0V1.5V30H1.5V1.5H30V0H1.5Z\' fill=\'white\'/%3E%3C/svg%3E")',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container relative px-4 z-10 md:px-8">
        {/* Header with animated underline */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-300 bg-blue-950/50 rounded-full backdrop-blur-sm mb-4 md:px-4 md:py-1.5">
              Effortless Integration
            </span>
            <h2 className="text-3xl font-bold mb-4 tracking-tight md:text-4xl md:mb-6">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Works</span>
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto md:text-lg">
              A seamless four-step process to break language barriers
            </p>
            
            {/* Animated underline */}
            <div className="relative w-32 h-1 mx-auto mt-6 md:w-40">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/70 via-cyan-600/70 to-blue-600/70 rounded-full transform -translate-x-1/2" />
          
          {/* Steps container */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.8, delay: index * 0.2 } }
                }}
                initial="hidden"
                animate={mainControls}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
              >
                {/* Step number without hover animation */}
                <div className="relative shrink-0 z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent md:text-2xl">
                      {step.number}
                    </span>
                  </div>
                  {/* Pulsing circle animation */}
                  <div className="absolute -inset-2 z-0 md:-inset-3">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-50" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-sm" />
                  </div>
                </div>

                {/* Content card without hover animation */}
                <div className="flex-1">
                  <div className="relative bg-gray-900/90 backdrop-blur-md rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-cyan-800/20 opacity-50" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600" />
                    
                    <div className="p-6 relative md:p-8">
                      <div className="flex flex-col gap-6 items-start md:flex-row md:gap-8">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 md:text-2xl">{step.title}</h3>
                          <p className="text-gray-300 text-sm md:text-base">{step.description}</p>
                          
                          <ul className="mt-4 space-y-2 md:mt-5">
                            {index === 0 ? (
                              <>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Simple & fast onboarding — create an account in less than 30 seconds.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Add your instructions once — no repeated uploading or rewriting.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Personalized settings — choose default languages, tone, and translation preferences.</span>
                                </li>
                              </>
                            ) : index === 1 ? (
                              <>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Instant multi-language translation using AI (powered by Lingo).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Auto-generate QR with one click — no design skills needed.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Dynamic QR updates — change your instruction anytime without printing again.</span>
                                </li>
                              </>
                            ) : index === 2 ? (
                              <>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Works anywhere — classrooms, offices, events, hospitals, factories.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Zero maintenance — one QR supports unlimited scans.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Always updated — if you edit text later, every QR instantly reflects changes.</span>
                                </li>
                              </>
                            ) : (
                              <>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Supports 100+ languages & dialects for maximum accessibility.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Clean multilingual reader UI — no ads, no distractions.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 shrink-0 md:h-5 md:w-5" />
                                  <span className="text-xs text-gray-300 md:text-sm">Auto-detect device language to give users the best default option.</span>
                                </li>
                              </>
                            )}
                          </ul>

                          <div className="mt-4 md:mt-6">
                            <a href="#" className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors md:text-sm">
                              Learn more about this step <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                            </a>
                          </div>
                        </div>
                        
                        {/* Image without hover animation */}
                        <div className="relative shrink-0 w-full aspect-[4/3] rounded-lg overflow-hidden md:w-2/5">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 z-10" />
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA without hover animation */}
        <motion.div 
          className="mt-16 text-center md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-md opacity-70" />
            <a 
              href="#" 
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white font-medium text-base hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-900/30 md:px-8 md:py-4 md:text-lg"
            >
              Get Started Now <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
          
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Join thousands using Scan2Understand
          </p>
        </motion.div>
      </div>
    </section>
  )
}