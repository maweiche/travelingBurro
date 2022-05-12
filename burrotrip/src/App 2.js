import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to="/en" />} exact />
            <Route path="/:locale" element={<HomePage />} />
            <Route path="/:locale/:slug" element={<ArticlePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
