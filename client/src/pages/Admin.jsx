import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = ({ onLogout }) => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (!username || !password) {
          navigate("/login");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/messages", {
          headers: {
            Authorization: "Basic " + btoa(`${username}:${password}`),
          },
        });

        setMessages(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setMessages([]);

        // If unauthorized, clear storage and redirect to login
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          onLogout(); // 🔴 update App state
          navigate("/login");
        }
      }
    };

    fetchMessages();
  }, [navigate, onLogout]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    onLogout(); // 🔴 update App state
    navigate("/login");
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2 style={{ color: "white" }}>Admin Panel</h2>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#messages">Messages</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>

        {/* 🔘 Logout button */}
        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div className="main-panel">
        <h1>Messages</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.subject}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No messages found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
