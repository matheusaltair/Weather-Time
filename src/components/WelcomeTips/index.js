import React from "react";
import "./style.css";

const WelcomeTips = ({ src, title, }) =>{
    return(
        <div className = "card">
            <img className = "image" src = {src}/>
            <p className = "text">{ title }</p>
        </div>
    )
}

export default WelcomeTips;

