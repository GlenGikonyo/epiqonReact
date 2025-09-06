import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // 🔑 add navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:5000/api/messages", {
        headers: {
          Authorization: "Basic " + btoa(`${username}:${password}`),
        },
      });

      if (response.status === 200) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        onLogin();

        navigate("/admin"); // 🔑 redirect to admin panel
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>🔐 Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
