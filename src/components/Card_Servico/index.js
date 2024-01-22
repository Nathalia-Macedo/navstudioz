import "./Card_Servico.css"
import React from 'react';

function CardServico(props){
    return(
    <>
    <div className="Card_Service">
        <div className="div_image">
            <img src={props.url} alt="#"/>
        </div>
        <div id="icon">
        <img src={props.icon} alt="#"/>
        </div>
        
        <div className="conteudo" >
            <h2>{props.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.content }} />

        </div>

    </div>
    </>)
}

export default CardServico