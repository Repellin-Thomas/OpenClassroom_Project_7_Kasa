import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/Error';
import Footer from './components/Footer';
import HouseComponent from './pages/House';
import './App.css'

function App() {
    return (<div className="app-container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/fiche-logement/:id" element={<HouseComponent />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />

    </div>)
}

export default App