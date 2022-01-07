import React from "react";
import "./style.css";
import Amongnature from "../../assets/amongnature.svg";


    const Home = () =>{
        return(
            <div>
                <div className = "main">
                    <img className = "image2" src = {Amongnature}/>
                </div>
                <div className = "content">
                </div>
                <div className = "content2">
                    <div className = "retangle"></div>
                    <div className = "retangle"></div>
                    <div className = "retangle"></div>
                    <div className = "retangle"></div>
                </div>
            </div>
        )   
    }

export default Home;