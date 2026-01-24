import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

export default function Footer(){
    const currentPath = window.location.pathname

    return (
        <footer>
            <h2 className="title footer">Compra Fácil</h2>

            {currentPath === '/about' && <Link to={'/'}><BsArrow90DegLeft className="icon go-back"/></Link>}

            <nav>
                <ul>
                    {currentPath === '/' ? <li><Link to={'/about'}>Sobre a loja</Link></li> : <li><Link to={'/'}>Inicio</Link></li>}
                </ul>
            </nav>
        </footer>
    )
}