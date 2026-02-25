import logo from '../../assets/images/logo-icon.png'
import { FaHeart, FaInstagram, FaAmazon, FaYoutube   } from "react-icons/fa6";
import { SiMercadopago } from "react-icons/si";
import { Link } from 'react-router-dom'

export default function Footer(){
    const currentPath = window.location.pathname

    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="Logo Compra Fácil By" />
            </div>
            <div className="footer-text">
                <h2 className="title footer">Compra Fácil</h2>

                <div className='footer-links'>
                    <a href="https://www.instagram.com/swillissilva1111/" target='_blank'><FaInstagram className='icon social instagram'/></a>
                    <a href="https://www.mercadolivre.com.br/social/swillissilva1111loja" target='_blank'><SiMercadopago className='icon social mercado-pago'/></a>
                    <a href="" target='_blank'><FaAmazon className='icon social amazon'/></a>
                    <a href="https://www.youtube.com/@willissantossilva1637" target='_blank'><FaYoutube  className='icon social youtube'/></a>
                </div>

                <p className='text'>Feito com <FaHeart className='icon'/> para você</p>
            </div>
        </footer>
    )
}