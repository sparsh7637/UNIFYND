import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./services/AuthProvider";
import "./firebaseConfig"; // Import to ensure Firebase is initialized

const container = document.getElementById("root");
const root = createRoot(container); // Create a React 18 root

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);