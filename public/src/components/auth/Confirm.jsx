import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthProvider";

function Confirm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://us-central1-unifynd-fd049.cloudfunctions.net/api/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (response.ok) {
        setMessage("Confirmation code is correct.");
        const { token } = await response.json(); // Assuming API returns a token or session identifier
        await signInWithToken(token);
        navigate("/login");
      } else {
        const error = await response.text();
        setMessage(`Error: ${error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2 className="text-center sign-up-heading">Confirm Your Email</h2>
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
        <Form.Group controlId="formCode" className="mt-3">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter confirmation code"
            required
            disabled={loading}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4" disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" className="mr-2" />
              Confirming...
            </>
          ) : (
            "Confirm"
          )}
        </Button>
      </Form>
      {message && <div className="mt-4">{message}</div>}
    </Container>
  );
}

export default Confirm;
