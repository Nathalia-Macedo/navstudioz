import "./Home.css"
import foto from "../../assets/foto.png"
import iconphoto from "../../assets/iconphoto.png"
import edition from "../../assets/edicao.png"
import iconedition from "../../assets/iconedition.png"
import video from "../../assets/video.png"
import iconvideo from "../../assets/iconvideo.png"
import CardServico from "../../components/Card_Servico"
import mockup from "../../assets/two.png"
import seta from "../../assets/seta.png"
import { Nav } from "../../components/Navbar"
import Button from "../../components/Button"
export function Home(){
    return(
        <>
        <Nav/>
        <section className="home">
          <div className="text">
          <h1>
            Compartilhando o mundo <br/>
            através das lentes
            </h1>

            <p>
                Do Brainstorm a Produção, oferecemos fotografia<br/>
                filmagem e edição. Venha nos conhecer!
            </p>
                <Button title="Solicite um orçamento"></Button>
          </div>
         </section>
           
            <section className="sobreNos">
                <div className="colorido">
                            <img src={seta} alt="#"/>
                        </div>
                      

                        <div className="content">
                            <img src={mockup} alt="#"/>
                            <div id="sobreNos" className="description">
                                <h1>Sobre nós</h1>
                                <p>Somos navegadores das artes visuais, embarcando em <br/>jornadascriativas para registrar a beleza do mundo ao nosso <br/> redor.
                                Como uma espaçonave habilmente projetada,<br/>
                                percorremos lugares onde o seu objetivo se encontra<br/>
                                Buscando eternizar momentos ou promover o seu negócio.</p>
                                <p><span>A Nav Studioz</span> é uma empresa de fotografia, filmagem e<br/>
                                edição, onde acreditamos que cada projeto é único, por isso <br/>
                                personalizamos um combo de acordo com seu foco, com a<br/>
                                missão de transformar cada momento em uma peça visual<br/>
                                cativante, onde cada história é contada com autenticidade e <br/>
                                excelência.
                                </p>
                            </div>

                        </div>
                    
            </section>
            <section className="nossosServicos">
                 <div className="row">
                    .
                 </div>
                 <h1>Nossos Serviços</h1>
                 <div className="servicos">
                    <CardServico title="Video" icon={iconvideo} url={video} content="Nav Studioz produz vídeos <br> cativantes, contando histórias <br> emocionantes com expertise <br> cinematográfica e criatividade envolvente."></CardServico>
                    <CardServico title="Fotografia" icon={iconphoto} url={foto}  content="Nav Studioz captura <br> momentos unicos com estilo e <br> qualidade, eternizando memórias <br> através da fotografia excepcional"/>
                    <CardServico title="Edição" icon={iconedition} url={edition} content="Nav Studioz aprimora imagens <br> com edição refinada, transformando <br> momentos em obras de arte <br> vívidas e impactantes."></CardServico>
                 </div>

            </section>
         
        </>
    )
}