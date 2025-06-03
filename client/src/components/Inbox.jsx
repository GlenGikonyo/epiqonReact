import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get('/messages');
        setMessages(res.data);
      } catch (err) {
        alert('Failed to load messages');
      }
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Inbox</h2>
      {messages.map(msg => (
        <div key={msg._id}>
          <h4>{msg.subject} - {msg.email}</h4>
          <p>{msg.message}</p>
          <small>{new Date(msg.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Inbox;