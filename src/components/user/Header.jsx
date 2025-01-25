import React from 'react';
import ApplicationSidebar from 'components/sidebar/ApplicationSidebar';
import './Header.scss';
import logo from 'assets/logo.jpeg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="nav-bar">
            <ApplicationSidebar open={false} />
            <div className="logo-wrapper">
                <img src={logo} alt="App Logo" />
                {/* <h1 className="app-name">SmartHome</h1> */}
            </div>
            <nav className="right-child">
                <div className="links">
                    {/* <Link to="/" className="nav-link">Home</Link>
                    <Link to="/app/dashboard" className="nav-link">Dashboard</Link> */}
                    <Link to="/app/switches" className="nav-link">Switches</Link>
                    <Link to="/app/remote" className="nav-link">Remote</Link>
                    <Link to="/app/search" className="nav-link">Search</Link>

                </div>
                {/* <div className="profile">
                    <img src="" alt="User Profile" />
                </div> */}
            </nav>
        </header>
    );
}

export default Header;