import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUserState, useMessages, sendMessage } from '../firebase';

const GameChat = () => {
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const [user] = useUserState();
  const messages = useMessages(id);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;
    
    try {
      await sendMessage(id, message.trim(), user);
      setMessage('');
      inputRef.current?.focus();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="d-flex justify-content-between align-items-center my-3">
        <Link to={`/game/${id}`} className="btn btn-secondary">← Back to Game</Link>
      </div>

      {}
      <div className="flex-grow-1 overflow-auto mb-3 p-3 bg-light rounded">
        {messages.map((msg) => (
          <div key={msg.id} className={`d-flex ${msg.author === user?.email ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
            <div className={`d-flex ${msg.author === user?.email ? 'flex-row-reverse' : 'flex-row'} align-items-start`}>
              <img 
                src={msg.avatar} 
                alt={msg.authorName}
                className="rounded-circle mx-2" 
                width="40" 
                height="40"
              />
              <div 
                className={`px-3 py-2 rounded-3 ${
                  msg.author === user?.email ? 'bg-primary text-white' : 'bg-white border'
                }`}
                style={{ maxWidth: '300px' }}
              >
                <div className="small fw-bold">{msg.authorName}</div>
                <div>{msg.text}</div>
                <div className="small text-opacity-75">
                  {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'sending...'}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {}
      {user ? (
        <form onSubmit={handleSubmit} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={inputRef}
          />
          <button 
            type="submit" 
            className="btn btn-secondary"
            disabled={!message.trim()}
          >
            Send
          </button>
        </form>
      ) : (
        <div className="alert alert-info mb-3">
          Please sign in to send messages
        </div>
      )}
    </div>
  );
};

export default GameChat;