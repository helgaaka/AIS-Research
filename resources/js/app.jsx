import './bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import Tracking from './Pages/RuteMap/MainRuteMap'; // Import Tracking page
import Halaman1 from './Pages/Halaman1/halaman1'; // Import halaman1 page
import Halaman2 from './Pages/Halaman2/halaman2'; // Import halaman2 page

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Rute untuk setiap page */}
                <Route path="/" element={<Tracking />} /> {/* rute default */}
                <Route path="/tracking" element={<Tracking />} /> {/* Mengarah Ke file Tracking.jsx*/}
                <Route path="/halaman1" element={<Halaman1 />} /> {/* Mengarah Ke file halaman1.jsx*/}
                <Route path="/halaman2" element={<Halaman2 />} /> {/* Mengarah Ke file halaman2.jsx*/}
            </Routes>
        </Router>
    );
};

// Render the App
render(<App />, document.getElementById('app'));
