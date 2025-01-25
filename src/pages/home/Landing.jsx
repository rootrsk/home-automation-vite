import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
// import landingImage from 'assets/landing-image.jpeg';



function Landing() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="header-content">
                    <h1 className="app-title">Welcome to SmartHome</h1>
                    <p className="tagline">Your home, smarter and safer.</p>
                    <div className="cta-buttons">
                        <Link to="/app/dashboard" className="btn-primary">Get Started</Link>
                        {/* <button className="btn-secondary" disabled>Learn More</button> */}
                    </div>
                </div>
            </header>
            <main className="landing-main">
                <img src={"landingImage"} alt="Smart Home" className="landing-image" />
                <section className="features">
                    <h2>Why Choose SmartHome?</h2>
                    <div className="feature-cards">
                        <div className="card">
                            <h3>Real-time Monitoring</h3>
                            <p>Track gas levels, temperature, and more in real-time, ensuring safety and convenience.</p>
                        </div>
                        <div className="card">
                            <h3>Smart Controls</h3>
                            <p>Effortlessly control your home appliances with a single click.</p>
                        </div>
                        <div className="card">
                            <h3>Seamless Integration</h3>
                            <p>Easily connect with Arduino and IoT devices for unparalleled functionality.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Landing;