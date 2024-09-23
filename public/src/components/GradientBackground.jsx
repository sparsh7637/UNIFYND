import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import hat from "./images/hat.png";

const GradientBackground = () => {
  const location = useLocation();
  const gradientStyle = {
    background:
      "linear-gradient(to top right, #9e004a 0%, #01004e 50%, #0200cd 100%)",
    height: "100vh",
    width: "100%",
    position: "relative",
  };

  if (location.pathname === "/") {
    return <div style={gradientStyle}>{/* Content goes here */}</div>;
  }

  return null;
};

export default GradientBackground;
