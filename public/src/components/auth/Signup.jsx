import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();



  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendConfirmationEmail(userCredential.user);
      await storeUserDetails(userCredential.user);
      alert("Confirmation email sent! Please check your inbox.");
      navigate("/signin");
    } catch (error) {
      setError("Failed to sign up. Please try again.");
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await storeUserDetails(result.user);
      navigate("/");
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
      console.error("Error signing in with Google:", error);
    }
  };

  const storeUserDetails = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          verified: user.emailVerified,
          Note1: "",
          Note2: "",
          Note3: "",
          Note4: "",
          Note5: "",
        },
        { merge: true }
      );

      console.log("User details and default notes created successfully.");
    } catch (error) {
      console.error(
        "Error creating user details and default notes in Firestore:",
        error
      );
    }
  };

  const sendConfirmationEmail = async (user) => {
    try {
      await sendEmailVerification(user, {
        url: "http://localhost:5173/?mode=verifyEmail&oobCode={oobCode}",
      });
      console.log("Confirmation email sent.");
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleSignUp}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          style={{ padding: "10px", marginBottom: "20px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Sign Up
        </button>
        <button
          onClick={handleGoogleSignIn}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Sign in with Google
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
