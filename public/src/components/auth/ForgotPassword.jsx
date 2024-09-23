import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth(); // Initialize Firebase Auth

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Error sending reset email:", error);
      alert(`Failed to send reset email: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="text-center sign-up-heading">Forgot Password</h1>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="mt-4"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="mr-2" />
              Sending...
            </>
          ) : (
            "Reset Password"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
