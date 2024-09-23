import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");
  const oobCode = queryParams.get("oobCode");

  // Log the complete URL for debugging
  React.useEffect(() => {
    console.log('Full URL:', window.location.href);
    console.log('Query Parameters:', location.search);
    console.log('Mode:', mode);
    console.log('OOB Code:', oobCode);

    if (mode && oobCode) {
      if (mode === "resetPassword") {
        navigate(`/reset-password?oobCode=${oobCode}`);
      } else if (mode === "verifyEmail") {
        navigate(`/verify-email?oobCode=${oobCode}`);
      } else {
        console.error(`Unsupported mode: ${mode}`);
        navigate('/error'); // Redirect to an error page if the mode is not supported
      }
    } else {
      console.error('Missing mode or oobCode');
      navigate('/error'); // Redirect to an error page if parameters are missing
    }
  }, [mode, oobCode, navigate, location.search]);

  return null;
};

export default AuthRedirect;
