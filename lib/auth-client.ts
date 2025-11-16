import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Social sign in handler
export const signIn = {
  social: async (
    { provider, callbackURL }: { provider: string; callbackURL: string },
    { onRequest, onResponse }: { onRequest: () => void; onResponse: () => void }
  ) => {
    // Check if Firebase auth is properly configured
    if (!auth) {
      console.warn("Firebase auth not properly configured.");
      onResponse();
      return;
    }

    onRequest();
    
    try {
      const authProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, authProvider);
      onResponse();
      
      // Redirect to callback URL after successful sign in
      if (callbackURL) {
        window.location.href = callbackURL;
      }
    } catch (error: any) {
      console.error("Sign in error:", error);
      onResponse();
    }
  }
};

// Sign out handler
export const signOutUser = async () => {
  // Check if Firebase auth is properly configured
  if (!auth) {
    console.warn("Firebase auth not properly configured.");
    return;
  }

  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign out error:", error);
  }
};