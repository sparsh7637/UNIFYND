import React, { useEffect, useState } from 'react';
import { getAuth, applyActionCode } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const location = useLocation();
  const oobCode = new URLSearchParams(location.search).get('oobCode');

  useEffect(() => {
    if (oobCode) {
      verifyEmail();
    } else {
      navigate('/'); // Redirect if no oobCode is found
    }
  }, [oobCode]);

  const verifyEmail = async () => {
    try {
      await applyActionCode(auth, oobCode);
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(db, "users", user.uid), {
          verified: true,
        });
        setVerificationStatus('success');
      } else {
        setVerificationStatus('error');
      }
    } catch (error) {
      setVerificationStatus('error');
      console.error("Error verifying email:", error);
    }
  };

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Email Verification</h1>
      {verificationStatus === 'success' ? (
        <>
          <p>Your email has been successfully verified!</p>
          <button
            onClick={handleRedirect}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Go to Home
          </button>
        </>
      ) : verificationStatus === 'error' ? (
        <p>There was an issue verifying your email. Please try again later.</p>
      ) : (
        <p>Verifying your email...</p>
      )}
    </div>
  );
};

export default VerifyEmail;
