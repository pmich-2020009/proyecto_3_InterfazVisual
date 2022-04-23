import React from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted></video>
            <h1>Interfaz Visual Adaptable</h1>
            <p>Proyecto 3</p>
        </div>
    )
}

export default Cover