import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light mt-auto">
            <div className="container">
                <div className="py-4">
                    {/* Name and Year */}
                    <div className="text-center mb-3">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Jose Guillen
                        </p>
                    </div>
                    
                    {/* Site Links */}
                    <div className="text-center">
                        <nav aria-label="Footer Navigation">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="/" className="text-decoration-none text-muted">Home</Link>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <Link to="/blog" className="text-decoration-none text-muted">Blog</Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/projects" className="text-decoration-none text-muted">Projects</Link>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <Link to="/about" className="text-decoration-none text-muted">About</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;