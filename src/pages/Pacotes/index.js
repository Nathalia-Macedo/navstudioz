import "./pacotes.css"
import React from "react"
import { Nav } from "../../components/Navbar"
import mockup from "../../assets/mockup.png"
import Button from "../../components/Button"
import Card_Pacote from "../../components/Card_Pacote"
import Footer from "../../components/Footer"

function Pacotes(){
    return(
        <>
        <Nav></Nav>
        <section className="nossosPacotes">
            <div className="image_pacote">
            <img src={mockup} alt="foto"/>
            </div>
            <div className="conteudoPacotes">
                <h2>Nossos Pacotes</h2>
                <p>Descubra um <span><b>universo de possibilidades</b></span> criativas com os <br/>exclusivos combos da Nav Studioz. Deixe-se envolver pela <br/> magia da fotografia, explorando nuances artísticas em <br/> nossos ensaios únicos; transmita sua mensagem de forma <br/> envolvente com nossa filmagem especializada para mídias <br/> sociais; transforme momentos em memórias eternas através<br/> de nossa edição de vídeo meticulosa; eleve a imagem de sua <br/> empresa com nosso combo corporativo sob medida. <br/><br/> E para uma experiênica verdadeiramente ilimitada, mergulhe<br/> no incomparável Combo Universe, onde todas essas opções <br/> se fundem, criando um mundo de expressão visual sem <br/> fronteiras. Seja qual for a sua visão, na Nav Studioz, nossos <br/>combos transformam <span><b>ideias em realidade</b></span></p>

                <Button title="Conheça agora"></Button>
            </div>
        </section>
        <div className="container_combos">
         <section className="combos">
            <div className="title_cards_pacotes">
                <h1>Combos Fotografia</h1>
                <span>Conheça os nossos combos de fotografia</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$350,00" qtd="20 fotos" type="Edição" estudio=" 1 hora de Estúdio" product="Produção Selecionada" buttonColor="#844AFF"  ></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="ESTELAR" value="R$570,00" qtd="40 fotos" type="Edição" estudio=" 2 horas de Estúdio" product="Produção Selecionada + Maquiagem" buttonColor="#CE00FF"   ></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="SUPERNOVA" value="R$780,00" qtd="50 fotos + Edição" estudio=" 3 horas de Estúdio" product="Produção Selecionada + Maquiagem" type="10 fotos reveladas" buttonColor="#008CFF"  ></Card_Pacote>
            </div>
        </section>
        <section className="combos">
        <div className="title_cards_pacotes">
                <h1>Combos de Ensaio artístico</h1>
                <span>Conheça os nossos Ensaios Artísticos</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$480,00" qtd="10 fotos" type="Edição Criativa" estudio="2 horas de Estúdio" buttonColor="#844AFF" product="Produção Criativa"></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="ESTELAR" value="R$680,00" qtd="15 fotos" type="Edição Criativa" estudio="2 horas de Estúdio"  buttonColor="#CE00FF" product="Produção Criativa + Maquiagem"></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="SUPERNOVA" value="R$880,00" qtd="20 fotos + Edição Criativa" estudio=" 3 horas de Estúdio" product="Produção Criativa + Maquiagem" type="10 fotos reveladas" buttonColor="#008CFF"  ></Card_Pacote> </div>
        </section>
        <section className="combos">
        <div className="title_cards_pacotes">
                <h1>Combos de Filmagem Social Media</h1>
                <span>Conheça os nossos combos de Filmagem Social Media</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$420,00" qtd="2 Reels" type="Edição" estudio="Locação (Estúdio ou Externa" buttonColor="#844AFF" product="Produção Selecionada"></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="ESTELAR" value="R$620,00" qtd="5 Reels" type="Edição" estudio="2 horas de Estúdio"  buttonColor="#CE00FF" product="Produção selecionada + Maquiagem"></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="SUPERNOVA" value="R$880,00" qtd="8 Reels + Edição " estudio=" 3 horas de Estúdio" product="Produção selecionada + Maquiagem" type="Capa" buttonColor="#008CFF"  ></Card_Pacote> </div>
        </section>
        <section className="combos">
        <div className="title_cards_pacotes">
                <h1>Combos de Edição de Vídeo</h1>
                <span>Conheça os nossos combos de Edição de Vídeo</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$250,00"  type="2 Videos (Teaser ou Reel)" estudio="Ajuste de Cor" buttonColor="#844AFF" ></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="ESTELAR" value="R$620,00" qtd="1 Video Clip" type="1 Video Teaser" estudio="Ajuste de cor"  buttonColor="#CE00FF" ></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="SUPERNOVA" value="R$890,00" qtd="1 Video Teaser" estudio=" 1 Video Clip" product="1 Reel" type="Ajuste de Cor" buttonColor="#008CFF"  ></Card_Pacote> </div>
        </section>
        <section className="combos">
        <div className="title_cards_pacotes">
                <h1>Combos Corporativos</h1>
                <span>Conheça os nossos combos Corporativos</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$610,00" qtd="10 fotos (Retrato ou Still)"  type="Edição" estudio="1 Reel"
            product=" Produção Selecionada " make="Maquiagem" buttonColor="#844AFF" ></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="MASTER" value="R$800,00" qtd="15 fotos (Retrato ou Still)" type="1 Reel + Edição" estudio="3 horas de Locação" product="Produção Selecionada "  make="Maquiagem" buttonColor="#CE00FF" ></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="PREMIUM" value="R$960,00" qtd="20 fotos (Retrato ou Still)" product="Produção selecionada + Ediçao" type="1 Reel + 4 horas de Locação" make="Maquiagem" buttonColor="#008CFF"  ></Card_Pacote> </div>
        </section>
        <section className="combos">
        <div className="title_cards_pacotes">
                <h1>Combos Universe</h1>
                <span>Conheça os nossos combos Universe</span>
            </div>
            <div className="cartoes_pacotes">
            <Card_Pacote colorFont="#844AFF" titleCard="CLÁSSICO" value="R$860,00" qtd="10 fotos (Retrato ou Still)"  type="2 horas de Locação + Edição" estudio="1 Edição de Teaser"
            product="Produção Criativa + Maquiagem" buttonColor="#844AFF" ></Card_Pacote>
            <Card_Pacote colorFont="#CE00FF" titleCard="Astro" value="R$1.500,00" qtd="20 fotos (Retratos ou Still)" type="3 horas de Locação + Maquiagem" product=" 1 Edição de Teaser + 1 Reel"
            estudio="Produção Criativa + Edição"  buttonColor="#CE00FF" ></Card_Pacote>
            <Card_Pacote colorFont="#008CFF" titleCard="Galaxy" value="R$1.500,00" qtd="30 fotos (Retrato ou Still)" estudio=" 4 horas de Locação" product=" 1 Edição Teaser + 1 Reel" type="Produção criativa + Edição"  make="Maquiagem" buttonColor="#008CFF"  ></Card_Pacote> </div>
        </section>
        </div>
        <Footer></Footer>
        </> 
    )
}

export default Pacotes