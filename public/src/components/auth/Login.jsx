import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/"); // Redirect to profile after successful sign-in
    } catch (error) {
      setError("Failed to sign in. Please check your credentials.");
      console.error("Error signing in with email and password:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      navigate("/"); // Redirect to profile after successful sign-in
    } catch (error) {
      setError("Failed to sign in with Google.");
      console.error("Error signing in with Google:", error);
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
      <h1>Sign In</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleEmailSignIn}
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
          style={{ padding: "10px", marginBottom: "20px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Sign In
        </button>
        <button
          onClick={handleGoogleSignIn}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Sign In with Google
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        <a href="/forgot-password">Forgot your password?</a>
      </p>
    </div>
  );
};

export default Login;
