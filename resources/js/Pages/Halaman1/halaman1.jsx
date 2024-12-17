import React from 'react';
import { Link } from 'react-router-dom';

const Halaman1 = () => {
    return (
        <div>
            <h1>Halaman 1</h1>
            <p>Ini Halaman 1</p>
            <Link to="/tracking">Kembali ke Tracking</Link>
        </div>
    );
};

export default Halaman1;
