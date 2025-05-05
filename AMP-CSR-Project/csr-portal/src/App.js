// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import { UserProvider } from './context/UserContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <UserProvider>
      <div
        className={`min-h-screen flex ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
        style={{
          backgroundImage: `url('/carwash.png')`, // 👈 this assumes carwash.png is in public/
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Router>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <div className="flex-1 p-6 bg-white/80 backdrop-blur-md min-h-screen overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
