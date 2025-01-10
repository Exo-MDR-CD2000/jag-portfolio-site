import React from 'react';
import { Link } from 'react-router-dom';
import currentYear from '../utilities/currentYear';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light mt-auto">
            <div className="container">
                <div className="py-4">
                    {/* Name and Year */}
                    <div className="text-center mb-3">
                        <p className="mb-0">
                            &copy; {currentYear()} Jose Guillen
                        </p>
                    </div>
                    
                    {/* Site Links */}
                    <div className="text-center">
                        <nav aria-label="Footer Navigation">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="/" className="text-decoration-none text-muted">Home</Link>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <Link to="/blog" className="text-decoration-none text-muted">Blog</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/projects" className="text-decoration-none text-muted">Projects</Link>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <Link to="/about" className="text-decoration-none text-muted">About</Link>
                                </li>
                                <li className="list-inline-item mx-2">
                                    <Link to="/contact" className="text-decoration-none text-muted">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    {/* Divider */}
                    <hr className="mx-auto w-50 opacity-25"/>
                    
                    {/* Social Links */}
                    <div className="text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mx-2">
                                <a href="https://github.com/Exo-MDR-CD2000" 
                                   className="text-decoration-none text-muted"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                    <span className="visually-hidden">GitHub</span>
                                </a>
                            </li>
                            <li className="list-inline-item mx-2">
                                <a href="https://www.linkedin.com/in/jag1997/" 
                                   className="text-decoration-none text-muted"
                                   target="_blank" 
                                   rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    <span className="visually-hidden">LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;