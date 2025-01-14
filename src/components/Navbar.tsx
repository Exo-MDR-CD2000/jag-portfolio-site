import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Brand with profile picture */}
                <Link className="navbar-brand" to="/">
                    <img 
                        src="/src/assets/new-exotic-bird-compressed.webp" 
                        alt="Profile" 
                        className="rounded"
                        width="40" 
                        height="40" 
                    />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Left-aligned main navigation */}
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Right-aligned social links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Exo-MDR-CD2000" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" aria-hidden="true"></i>
                                <span className="visually-hidden">GitHub</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/jag1997/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                                <span className="visually-hidden">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;