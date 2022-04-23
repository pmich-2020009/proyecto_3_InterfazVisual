import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Pablo Mich</h1>
                <p>Estudiante de Informática</p>
            </div>
            <div className="footer-contact">
                <h3>Contacto</h3>
                <p>+502 5936 8282</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Redes Sociales
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer