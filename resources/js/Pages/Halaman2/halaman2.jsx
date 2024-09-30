import React from 'react';
import { Link } from 'react-router-dom';

const Halaman2 = () => {
    return (
        <div>
            <h1>Halaman 2</h1>
            <p>Ini Halaman 2</p>
            <Link to="/tracking">Kembali ke Tracking</Link>
        </div>
    );
};

export default Halaman2;
