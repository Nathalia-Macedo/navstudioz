import "./portfolio.css"
import React from "react"
import { Nav } from "../../components/Navbar"
import Line_Images from "../../components/Image_portfolio"
import foto1 from "../../assets/img_portfolio/img1.jpg"
import foto2 from "../../assets/img_portfolio/img2.jpg"
import foto3 from "../../assets/img_portfolio/img3.jpg"
import foto4 from "../../assets/img_portfolio/img4.jpg"
import foto5 from "../../assets/img_portfolio/img5.jpg"
import foto6 from "../../assets/img_portfolio/img6.jpg"
import foto7 from "../../assets/img_portfolio/img7.jpg"
import foto8 from "../../assets/img_portfolio/img8.jpg"
import foto9 from "../../assets/img_portfolio/img9.jpg"
import foto10 from "../../assets/img_portfolio/img10.jpg"
import foto11 from "../../assets/img_portfolio/img11.jpg"
import foto12 from "../../assets/img_portfolio/img12.jpg"
import foto13 from "../../assets/img_portfolio/img13.jpg"
import foto14 from "../../assets/img_portfolio/img14.jpg"
import foto15 from "../../assets/img_portfolio/img15.jpg"
import foto16 from "../../assets/img_portfolio/img16.jpg"
import foto17 from "../../assets/img_portfolio/img17.jpg"
import foto18 from "../../assets/img_portfolio/img18.jpg"
import foto19 from "../../assets/img_portfolio/img19.jpg"
import foto20 from "../../assets/img_portfolio/img20.jpg"
import foto21 from "../../assets/img_portfolio/img21.jpg"
import foto22 from "../../assets/img_portfolio/img22.jpg"
import foto23 from "../../assets/img_portfolio/img23.jpg"
import foto24 from "../../assets/img_portfolio/img24.jpg"
import foto25 from "../../assets/img_portfolio/img25.jpg"
import foto26 from "../../assets/img_portfolio/img26.png"






function Portfolio(){
    return(<>
    <Nav></Nav>
    <div className="title_port">
        <h1>Nosso Portfólio</h1>
        <span>Conheça alguns serviços desenvolvidos para nossos parceiros</span>
    </div>
    <div className="images_port">
        <Line_Images url_one={foto1} url_two={foto2} url_three={foto3} url_four={foto4} ></Line_Images>
        <Line_Images url_one={foto5} url_two={foto6} url_three={foto7} url_four={foto8}></Line_Images>
        <Line_Images url_one={foto9} url_two={foto10} url_three={foto11} url_four={foto12}></Line_Images>
        <Line_Images url_one={foto13} url_two={foto14} url_three={foto15} url_four={foto16}></Line_Images>
        <Line_Images url_one={foto17} url_two={foto18} url_three={foto19} url_four={foto20}></Line_Images>
        <Line_Images url_one={foto21} url_two={foto22} url_three={foto23} url_four={foto24}></Line_Images>
        <Line_Images url_one={foto25} url_two={foto26}></Line_Images>
    </div>
    </>)
}

export default Portfolio