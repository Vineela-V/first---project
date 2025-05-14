import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact, Logout } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Logout">Logout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
