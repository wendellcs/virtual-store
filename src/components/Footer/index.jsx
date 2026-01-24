import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            <h2 className="title footer">Compra Fácil</h2>

            <nav>
                <ul>
                    <li><Link to={'/about'}>Sobre a loja</Link></li>
                </ul>
            </nav>
        </footer>
    )
}