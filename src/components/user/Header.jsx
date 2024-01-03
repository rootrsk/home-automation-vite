import React from 'react'
import ApplicationSidebar from 'components/sidebar/ApplicationSidebar'
import './Header.scss'
import logo from 'assets/logo.jpeg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <ApplicationSidebar open={false}  />
            <div className='nav-bar'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="" />
                </div>
                <div className='right-child'>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/app/dashboard">Dashboard</Link>
                        <Link to="/app/switches">Switches</Link>
                    </div>
                    <div className='profile'>
                        <img src="" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header