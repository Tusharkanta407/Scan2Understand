'use client';

import { TextHoverEffect, FooterBackgroundGradient } from '@/components/hover-footer';
import { Mail, X } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden py-12 font-light text-white antialiased md:py-16">
      <FooterBackgroundGradient />
      
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Hover Effect Text */}
          <div className="w-full max-w-5xl px-4">
            <TextHoverEffect 
              text="SCAN➁UNDERSTAND" 
              duration={0.5}
              className="w-full"
            />
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row sm:gap-6">
            <Link 
              href="mailto:support@scan2understand.com"
              className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span>tusharbehera053@gmail.com</span>
            </Link>
            
            <div className="hidden sm:block w-px h-5 bg-white/20 md:h-6"></div>
            
            <Link 
              href="https://x.com/TusharBehe69083"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
              <span>@scan➁understand</span>
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-center md:mt-12">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Scan2Understand. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}