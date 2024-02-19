import "./portfolio.css";
import React from "react";
import { Nav } from "../../components/Navbar";
import Line_Images from "../../components/Image_portfolio/index"
import Footer from "../../components/Footer"
// Importa dinamicamente todas as imagens do diretório 'img_portfolio'
const imagensContext = require.context("../../assets/img_portfolio", false, /\.(jpg|jpeg|png|gif|svg)$/);
const imagens = imagensContext.keys().map(key => imagensContext(key));

function Portfolio() {
  // Função para dividir o array de imagens em grupos de 4
  const divideArrayEmGrupos = (array, tamanhoDoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamanhoDoGrupo) {
      grupos.push(array.slice(i, i + tamanhoDoGrupo));
    }
    return grupos;
  };

  // Dividindo o array de imagens em grupos de 4 para renderização
  const gruposDeImagens = divideArrayEmGrupos(imagens, 4);

  return (
    <>
      <Nav />
      <div className="title_port">
        <h1>Nosso Portfólio</h1>
        <span>Conheça alguns serviços desenvolvidos para nossos parceiros</span>
      </div>
      <div className="images_port">
        {/* Mapeando cada grupo de imagens e renderizando o componente Line_Images */}
        {gruposDeImagens.map((grupo, index) => (
          <Line_Images
            key={index}
            url_one={grupo[0]} // Passando a primeira imagem do grupo
            url_two={grupo[1]} // Passando a segunda imagem do grupo
            url_three={grupo[2]} // Passando a terceira imagem do grupo
            url_four={grupo[3]} // Passando a quarta imagem do grupo
          />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;

