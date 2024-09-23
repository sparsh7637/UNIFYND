import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PercentageToCGPACalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [cgpa, setCgpa] = useState(null);
  const [error, setError] = useState("");

  const calculateCGPA = () => {
    if (percentage && !isNaN(percentage)) {
      const percentageValue = parseFloat(percentage);

      // Check if percentage is greater than 100
      if (percentageValue > 100) {
        setError("Percentage cannot be greater than 100.");
        setCgpa(null);
        return;
      }

      const result = (percentageValue / 9.5).toFixed(2);

      // Ensure CGPA does not exceed 10
      if (result > 10) {
        setError("Calculated CGPA cannot be more than 10.");
        setCgpa(null);
      } else {
        setCgpa(result);
        setError(""); // Clear any previous error
      }
    } else {
      alert("Please enter a valid percentage");
    }
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Percentage to CGPA Calculator
      </motion.h2>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <motion.label
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Enter Percentage:
        </motion.label>
        <motion.input
          type="number"
          step="0.01"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="Enter your percentage"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ced4da",
            width: "100%",
            maxWidth: "200px",
            outline: "none",
          }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.button
          onClick={calculateCGPA}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Calculate CGPA
        </motion.button>
      </motion.div>

      {/* Display error if exists */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "12px",
            display: "inline-block",
          }}
        >
          {error}
        </motion.div>
      )}

      {/* Display CGPA if valid */}
      <AnimatePresence>
        {cgpa !== null && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#e9ecef",
              borderRadius: "12px",
              display: "inline-block",
            }}
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Your CGPA is: <span style={{ color: "#28a745" }}>{cgpa}</span>
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PercentageToCGPACalculator;
