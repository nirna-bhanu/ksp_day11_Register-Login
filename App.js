
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import SignIn from './SignIn';
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
   
    console.log('Register:', userData);
  };

  const handleSignIn = (userData) => {
    
    console.log('Sign In:', userData);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul align="center">
            <li>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li>
              <Link  className='nav-link' to="/register">Register</Link>
            </li>
            <li>
              <Link  className='nav-link' to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
