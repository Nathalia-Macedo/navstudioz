import "./Navbar.css"
import React from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export function Nav(){
    return(
        <nav>
            <img src={logo} alt="#"/>
            
            <ul>
                <a><Link to="./home">Página Inicial</Link></a>
                <a><Link to="/portfolio">Portfólio</Link></a>
                <a><Link to="/pacotes">Pacotes</Link></a>
                <a><Link to="/Login">Login</Link></a>
            </ul>


            <button>Orçamento</button>
        </nav>
    )
}