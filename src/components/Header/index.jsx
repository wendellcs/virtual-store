import { FiShoppingBag } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <FiShoppingBag className='icon' />

            <div className="login-container">
                <Link className="btn" to="/login">
                    <span><IoPersonOutline className="icon button"/></span>
                    Entrar
                </Link>
                <Link className="btn purple" to="/register">Cadastrar</Link>
            </div>  
        </header>
    )
}