import { Link } from 'react-router-dom';
import React from 'react';
import './nav.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="logo">Doctor App</h2>
                <div className="menu">
                    <ul className="nav-links">
                        <li><Link to="/doctors" className="nav-item">Doctors List</Link></li>
                        <li><Link to="/appointments" className="nav-item">View Appointments</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
