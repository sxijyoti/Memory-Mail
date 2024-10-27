import React, { useState } from 'react';

const NewEntry = () => {
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>New Entry</h1>
      <textarea
        placeholder="Type out your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%', height: '100px', marginBottom: '1rem' }}
      />
      <button style={{ margin: '0.5rem' }}>Attach Media</button>
      <div style={{ margin: '1rem 0' }}>
        <label>Date:</label>
        <input type="date" />
      </div>
      <div style={{ margin: '1rem 0' }}>
        <label>Time:</label>
        <input type="time" />
      </div>
      <button style={{ margin: '0.5rem' }}>Select Recipients</button>
      <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Done</button>
    </div>
  );
};

export default NewEntry;
