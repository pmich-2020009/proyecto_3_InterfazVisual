import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Información Personal</h3>
                <p>Soy una persona aficionado de la
                    tecnología con el objetivo de
                    superarme en todos los aspectos
                    de mi vida</p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="about" width="100%" />
            </div>
        </div>
    )
}

export default About