import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import currentYear from '../utilities/currentYear';

const Footer: React.FC = () => {
    const location = useLocation();

    // Helper function to check if link is active
    const isActiveLink = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path === '/gallery' && location.pathname.startsWith('/gallery')) return true;
        return location.pathname === path;
    };

    return (
        <footer className="custom-footer mt-auto">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-brand-link">
                            <img 
                                src="/src/assets/new-exotic-bird-compressed.webp" 
                                alt="Jose Guillen Photography" 
                                className="footer-brand-image"
                                width="35" 
                                height="35" 
                            />
                            <span className="footer-brand-text">JG Photography</span>
                        </Link>
                        <p className="footer-tagline">
                            Capturing moments, creating memories
                        </p>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="footer-nav">
                        <h6 className="footer-nav-title">Navigation</h6>
                        <nav aria-label="Footer Navigation">
                            <ul className="footer-nav-list">
                                <li className="footer-nav-item">
                                    <Link 
                                        to="/" 
                                        className={`footer-nav-link ${isActiveLink('/') ? 'active' : ''}`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link 
                                        to="/gallery" 
                                        className={`footer-nav-link ${isActiveLink('/gallery') ? 'active' : ''}`}
                                    >
                                        Galleries
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link 
                                        to="/about" 
                                        className={`footer-nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link 
                                        to="/contact" 
                                        className={`footer-nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    {/* Social Links */}
                    <div className="footer-social">
                        <h6 className="footer-social-title">Follow</h6>
                        <ul className="footer-social-list">
                            <li className="footer-social-item">
                                <a 
                                    href="https://instagram.com/your_photography_handle" 
                                    className="footer-social-link instagram"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                    <span className="visually-hidden">Instagram</span>
                                </a>
                            </li>
                            <li className="footer-social-item">
                                <a 
                                    href="https://flickr.com/photos/your_handle" 
                                    className="footer-social-link flickr"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-flickr" aria-hidden="true"></i>
                                    <span className="visually-hidden">Flickr</span>
                                </a>
                            </li>
                            <li className="footer-social-item">
                                <a 
                                    href="https://www.linkedin.com/in/jag1997/" 
                                    className="footer-social-link linkedin"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    <span className="visually-hidden">LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-copyright">
                        <p className="copyright-text">
                            &copy; {currentYear()} Jose Guillen Photography. All rights reserved.
                        </p>
                        {/* <p className="footer-built">
                            Built with <span className="heart">❤</span> using React & TypeScript
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;