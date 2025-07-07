import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Helper function to check if link is active
    const isActiveLink = (path: string) => {
        if (path === '/home' && location.pathname === '/') return true;
        if (path === '/gallery' && location.pathname.startsWith('/gallery')) return true;
        return location.pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg custom-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                {/* Brand with profile picture */}
                <Link className="navbar-brand custom-brand" to="/">
                    <img 
                        src="/src/assets/new-exotic-bird-compressed.webp" 
                        alt="Jose Guillen Photography" 
                        className="brand-image"
                        width="45" 
                        height="45" 
                    />
                    <span className="brand-text">JG Photography</span>
                </Link>

                <button 
                    className="navbar-toggler custom-toggler" 
                    type="button" 
                    onClick={toggleMobileMenu}
                    aria-controls="navbarNav" 
                    aria-expanded={isMobileMenuOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
                    {/* Left-aligned main navigation */}
                    <ul className="navbar-nav me-auto custom-nav">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link custom-nav-link ${isActiveLink('/home') ? 'active' : ''}`} 
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link custom-nav-link ${isActiveLink('/gallery') ? 'active' : ''}`} 
                                to="/gallery"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Galleries
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link custom-nav-link ${isActiveLink('/about') ? 'active' : ''}`} 
                                to="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link custom-nav-link ${isActiveLink('/contact') ? 'active' : ''}`} 
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Right-aligned social links */}
                    <ul className="navbar-nav social-links">
                        <li className="nav-item">
                            <a className="nav-link social-link" href="https://instagram.com/your_photography_handle" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <span className="visually-hidden">Instagram</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link social-link" href="https://flickr.com/photos/your_handle" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-flickr" aria-hidden="true"></i>
                                <span className="visually-hidden">Flickr</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link social-link" href="https://www.linkedin.com/in/jag1997/" target="_blank" rel="noopener noreferrer">
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