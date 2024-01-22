import "./Footer.css"
import nave from "../../assets/nav.png"
import { Link } from "react-router-dom"
function Footer(){
    return(
        <footer>
            <div className="line_footer">
            </div>
            <div className="title_footer">
                <h1>Entre em Contato</h1>
                <span> Entre em contato conosco e solicite um orçamento</span>
            </div>
            <div className="info_user_footer">
                <input type="text" placeholder="Nome:"/>
                <input type="email" placeholder="E-mail:"/>
                <input type="number" placeholder="Telefone:"/>
            
                
            </div>
            <div className="message_footer">
                <textarea cols={81} rows={10} placeholder="Mensagem:"/>
            </div>
            <div        className="button_footer">
                <button> Enviar</button>
            </div>
            <div className="icons_footer">
                <div className="line_high"></div>
            <img src={nave} alt="#"/>
            <div className="navegation">
                <Link to="/home">Home</Link>
                <Link to="/portfolio">Portfólio</Link>
                <Link to="/pacotes">Pacotes</Link>
            </div>
            <div className="finale">
            <span>Copyrigth <span>&copy;</span> 2024 Todos os direitos Reservados</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer