import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ForgetPassword() {
  const emailRef = useRef();

  const {resetPassword} = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage('')
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage('Check inbox for further  instructions!')
     
    } catch {
      setError("Failed to Reset Password");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Password Reset</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an Account ? <Link to="/signup">SignUp</Link>
      </div>
    </>
  );
}
