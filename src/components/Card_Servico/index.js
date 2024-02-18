import "./Card_Servico.css";
import React from 'react';

function Card_Service(props) {
  const Image = {
    backgroundImage: `url(${props.image})`, // Correção na sintaxe
  };

  return (
    <>
      <div className="Card_Service">
        <div style={Image} className="div_da_img"></div>
        <div className="Icon_Service">
          <img src={props.url} alt="#" />
        </div>
        <div className="Conteudo_Service">
          <h2>{props.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
    </>
  );
}

export default Card_Service;
