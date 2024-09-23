import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CGPAToPercentageCalculator = () => {
  const [cgpa, setCgpa] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    if (cgpa && !isNaN(cgpa)) {
      const result = (parseFloat(cgpa) * 9.5).toFixed(2);
      setPercentage(result);
    } else {
      alert("Please enter a valid CGPA");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", // Full screen height
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2>CGPA to Percentage Calculator</h2>

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
            textAlign: "center",
          }}
        >
          <motion.label
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Enter CGPA:
          </motion.label>
          <motion.input
            type="number"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="Enter your CGPA"
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
            onClick={calculatePercentage}
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
            Calculate Percentage
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {percentage !== null && (
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
                Your Percentage is:{" "}
                <span style={{ color: "#28a745" }}>{percentage}%</span>
              </motion.h3>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CGPAToPercentageCalculator;
