
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Translator from './components/Translator';
import Faq from './components/FAQ';
import Create from './components/CreateFAQ';
import Update from './components/UpdateFAQ';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/create" element={<Create />} />
        <Route path="/faq/update/:id" element={<Update />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
