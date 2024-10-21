import React from 'react';

const Error404 = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Time Capsule Discovered!</h1>
      <p>Congratulations! You've stumbled upon a time capsule... but it's empty!</p>
      <p>Turns out, this page was buried under a pile of "404 Not Found" messages. </p>
      <p>
        It looks like the internet has sent you on a wild goose chase through time and space. 
        <br />
        Maybe it's in an alternate dimension? 🚀
      </p>
      <p>
        Don't worry, though! You can still return to the present. 
        </p>
        <p>
      <em>
        Just hit the button below to return to the present!</em>
        <br/></p>
      <a href="/" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
        Go Back Home
      </a>
    </div>
  );
};

export default Error404;
