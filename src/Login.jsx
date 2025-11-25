import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Incorrect email format");
      return;
    }
    if (password.length < 6) {
      setError("Incorrect password format");
      return;
    }
    setError("");
    alert("Login successful (demo only)");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">🎓</div>
        <h1>Welcome to Teachstant</h1>
        <p className="subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p className="desc">Enter your credentials to access your dashboard</p>

          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign in</button>
        </form>

        <div className="demo">
          <p>Demo Credentials:</p>
          <div className="demo-roles">
            <div>
              <strong>Student:</strong> student@example.com
              <br />
              <strong>Admin:</strong> admin@example.com
            </div>
            <div>
              <strong>Teacher:</strong> teacher@example.com
              <br />
              <strong>Password:</strong> password123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
