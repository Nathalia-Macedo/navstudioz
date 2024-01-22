// Line_Images.js
import "./Image.css";
import React from "react";

function Line_Images(props) {
    const lineImagesStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",


        
    };

    const imgPortStyle = {
        width: "230px", // Ajuste conforme necessário
        height: "290px", // Ajuste conforme necessário
        backgroundSize: "cover",
      
        
    };
   

    return (
        <div className="lineImages" style={lineImagesStyle}>
            <div className="img_port" style={{ ...imgPortStyle, backgroundImage: `url(${props.url_one})` }}>
                {/* Conteúdo adicional, se necessário */}
            </div>
            <div className="img_port" style={{ ...imgPortStyle, backgroundImage: `url(${props.url_two})` }}>
                {/* Conteúdo adicional, se necessário */}
            </div>
            <div className="img_port" style={{ ...imgPortStyle, backgroundImage: `url(${props.url_three})` }}>
                {/* Conteúdo adicional, se necessário */}
            </div>
            <div className="img_port" style={{ ...imgPortStyle, backgroundImage: `url(${props.url_four})` }}>
                {/* Conteúdo adicional, se necessário */}
            </div>
        </div>
    );
}

export default Line_Images;
