import React, { useState } from 'react';

const EditRecipients = () => {
  const [recipient, setRecipient] = useState('');
  const [about, setAbout] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Edit Recipients</h1>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={{ display: 'block', width: '100%', margin: '0.5rem 0' }}
      />
      <textarea
        placeholder="About"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        style={{ display: 'block', width: '100%', height: '60px', margin: '0.5rem 0' }}
      />
      <button style={{ margin: '0.5rem' }}>Send Email for Verification</button>
      <button style={{ margin: '0.5rem' }}>Done</button>
    </div>
  );
};

export default EditRecipients;
