"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { signOutUser } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run auth state listener on the client side
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const handleSignOut = async () => {
    await signOutUser();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Firebase Not Configured</h1>
          <p className="mt-2 text-gray-400">
            Firebase authentication is not properly configured.
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Access Denied</h1>
          <p className="mt-2 text-gray-400">
            You need to be logged in to view this page.
          </p>
          <div className="mt-6">
            <Link href="/auth/login">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Go to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative">
        <header className="border-b border-gray-800 backdrop-blur-xl bg-black/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user.displayName || user.email}</span>
              <Button 
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Login Successful!</h2>
            <p className="text-xl text-gray-300 mb-8">
              You have been successfully logged in.
            </p>
            
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Your Account Information</h3>
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-gray-400">Name</p>
                  <p className="text-lg">{user.displayName || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-400">User ID</p>
                  <p className="text-lg">{user.uid}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}