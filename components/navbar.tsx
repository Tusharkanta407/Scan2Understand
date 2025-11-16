"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SignInModal from "@/components/sign-in-modal";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Only run auth state listener on the client side
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });

      return () => unsubscribe();
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto mt-6 w-full max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl">
        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        
        <div className="relative flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-white tracking-tight md:text-xl">
              Scan➁Understand
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/products" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              How it works
            </Link>
            <Link 
              href="/resources" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Button - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block">
            {auth && user ? (
              <Link href="/dashboard">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                >
                  Dashboard
                </Button>
              </Link>
            ) : auth ? (
              <SignInModal 
                trigger={
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                  >
                    Sign Up Now
                  </Button>
                }
              />
            ) : (
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                disabled
              >
                Sign Up Now
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu - visible when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col space-y-3 pt-3 border-t border-white/10">
              <Link 
                href="/products" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="/resources" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {auth && user ? (
                <Link 
                  href="/dashboard" 
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : auth ? (
                <SignInModal 
                  trigger={
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up Now
                    </Button>
                  }
                />
              ) : (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 w-full"
                  disabled
                >
                  Sign Up Now
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}