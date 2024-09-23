import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Adjust the path as needed
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        // Password is incorrect
        console.error("Incorrect password.");
      } else if (error.code === 'auth/user-not-found') {
        // Email is not registered
        console.error("User not found.");
      } else {
        // Handle other errors
        console.error("Error signing in:", error);
      }
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  const value = {
    user,
    loading,
    signIn,
    resetPassword,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
