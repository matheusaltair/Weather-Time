import React from "react";
import "./style.css";

    const Button = ({button}) =>{
        return(
            <button className ="btn">
                <h4 className = "textbutton">{ button }</h4>
            </button>
        );  
}    
export default Button;