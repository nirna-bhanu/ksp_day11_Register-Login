import React, { useState } from 'react';
import './SignIn.css'

const LoginRegisterForm = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setLoggedIn(true);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">
            Log in
          </label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button onClick={handleLogin}>Log in</button>
        </form>
      </div>

      {isLoggedIn && (
        <div>
          <h2>Welcome to our app services!</h2>
          
        </div>
      )}
    </div>
  );
};

export default LoginRegisterForm;

