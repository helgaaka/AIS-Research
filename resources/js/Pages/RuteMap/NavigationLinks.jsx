import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link to="/halaman1" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', borderRadius: '5px' }}>Halaman 1</Link>
            <Link to="/halaman2" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', borderRadius: '5px' }}>Halaman 2</Link>
        </div>
    );
};

export default NavigationLinks;
