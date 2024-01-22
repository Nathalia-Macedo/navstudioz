import "./Card_Pacote.css";

function Card_Pacote(props) {
  const buttonStyle = {
    backgroundColor: props.buttonColor,
  };
  const FontColor = {
    color: props.colorFont,
  };

  return (
    <div className="Card_Pacote">
      <div className="titulo_pacote">
        <h1>{props.titleCard}</h1>
        <h3 style={FontColor}>{props.value}</h3>
      </div>
      <div className="Card_Pacote_content">
        <div className="content_pacotes">
          {props.qtd && <span>{props.qtd}</span>}
          {props.type && <span>{props.type}</span>}
          {props.estudio && <span>{props.estudio}</span>}
          {props.product && <span>{props.product}</span>}
          {props.make && <span>{props.make}</span>}
        </div>
        </div>
        <div className="button_pacote">
          <button style={buttonStyle}>Escolher pacote</button>
        </div>
      
    </div>
  );
}

export default Card_Pacote;
