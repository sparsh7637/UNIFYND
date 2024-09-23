import React, { useState, useEffect } from "react";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const oobCode = new URLSearchParams(location.search).get("oobCode");

  useEffect(() => {
    if (!oobCode) {
      navigate("/"); // Redirect if no oobCode is found
    }
  }, [oobCode]);

  const handlePasswordReset = () => {
    if (newPassword) {
      confirmPasswordReset(auth, oobCode, newPassword)
        .then(() => {
          setResetStatus("success");
          navigate("/login"); // Redirect to login after reset
        })
        .catch((error) => {
          setResetStatus("error");
          console.error("Error resetting password:", error);
        });
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
      <h1>Reset your password</h1>
      {resetStatus === "error" && (
        <p>
          There was an issue resetting your password. Please try again later.
        </p>
      )}
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      />
      <button
        onClick={handlePasswordReset}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
