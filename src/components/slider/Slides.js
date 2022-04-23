import React from "react";
import Contador from "../../media/contador.jpg"
import Background from "../../media/background.jpg"
import Pokedex from "../../media/pokedex.jpg"

const slidesInfo = [
    {
        src: Contador,
        alt: "Contador",
        desc: "Contador",
        href: "https://github.com/pmich-2020009/proyecto_1_contador.git"
    },
    {
        src: Background,
        alt: "Background Camaleón",
        desc: "Background Camaleón",
        href: "https://github.com/pmich-2020009/proyecto_2_background.git"
    },
    {
        src: Pokedex,
        alt: "Pokedex",
        desc: "Pokedex",
        href: "https://github.com/pmich-2020009/proyecto_4_ApiPokedex.git"
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <a className="slide-card" href={slide.href} target="_blank" rel="noopener noreferrer">
            <img src={slide.src} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;
