import Footer from "../../components/Footer"
import Header from "../../components/Header"
import logo from '../../assets/images/logo.png'
import { MdOutlineSecurity } from "react-icons/md";
import { BsLightningCharge, BsStars  } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuPiggyBank } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";

export default function About(){
    return (
        <div className="about-container">
            <Header/>

            <main id="about">
                <h1 className="title subtitle">Quem somos?</h1>

                <div className="text-container">
                    <p className="text">
                        A <span className="highlight">Compra Fácil By</span> é uma loja digital afiliada ao <span className="highlight">Magazine Luiza (Magalu)</span> e ao <span className="highlight">Mercado Livre</span>, criada
                        com o objetivo de ajudar você a encontrar os melhores produtos com segurança, praticidade e
                        economia.
                    </p>

                    <img src={logo} alt="Logo Compra Fácil By" />

                    <p className="text">
                    Somos apaixonados por boas ofertas e acreditamos que comprar bem não precisa ser complicado. Por
                        isso, selecionamos diariamente produtos confiáveis, com bom custo-benefício e ótima avaliação.
                    </p>

                    <p className="text">
                        A <span className="highlight">Compra Fácil By</span> é uma loja digital focada em indicar os melhores produtos com preço justo,
                        qualidade e segurança, através das maiores plataformas do Brasil: <span className="highlight">Magazine Luiza</span> e <span className="highlight">Mercado Livre</span>.
                    </p>
                </div>

                <div className="reasons">
                    <div className="box">
                        <div className="icon-frame">
                            <MdOutlineSecurity className="icon big"/>
                        </div>
                        
                        <h3 className="title medium">Segurança</h3>
                        <p className="text">Produtos verificados das maiores plataformas do Brasil</p>
                    </div>

                    <div className="box">
                        <div className="icon-frame">
                            <BsLightningCharge className="icon big"/>
                        </div>
                        
                        <h3 className="title medium">Praticidade</h3>
                        <p className="text">Encontre o que precisa de forma rápida e simples</p>
                    </div>

                    <div className="box">
                        <div className="icon-frame">
                            <FaRegHeart className="icon big"/>
                        </div>
                        
                        <h3 className="title medium">Confiança</h3>
                        <p className="text">Compromisso com transparência e qualidade</p>
                    </div>
                </div>

                <p className="quote">
                    "Nosso compromisso é indicar apenas aquilo que realmente vale a pena, conectando você às maiores
                    plataformas de venda do Brasil com total <span className="highlight">transparência</span> e <span className="highlight">confiança</span>."
                </p>
                
                <h3 className="title subtitle">Nossos objetivos</h3>
                <ul className="goals">
                    <li>
                        <div className="icon-frame">
                            <LuPiggyBank className="icon big"/>
                        </div>
                        <p>Ajudar você a economizar</p>
                    </li>
                    <li>
                        <div className="icon-frame">
                            <MdOutlineSecurity className="icon big"/>
                        </div>
                        <p>Evitar compras erradas</p>
                    </li>
                    <li>
                        <div className="icon-frame">
                            <AiFillLike className="icon big"/>
                        </div>
                        <p>Indicar produtos confiáveis</p>
                    </li>
                    <li>
                        <div className="icon-frame">
                            <BsStars className="icon big"/>
                        </div>
                        <p>Facilitar sua decisão de compra</p>
                    </li>
                </ul>

            </main>

            <Footer/>
        </div>
    )
}