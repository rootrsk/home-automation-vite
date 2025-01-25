import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className="note-found-page">
        <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Return to Home</Link>
        </div>
    </div>
  )
}

export default NotFound