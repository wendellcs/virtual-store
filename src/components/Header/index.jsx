import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-icon.png'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Header({}) {
    const [openDropdown, setOpenDropdown] = useState(false)

    const location = window.location.pathname

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Compra Fácil By" />
            </div>
            <Link to={'/'}><h1 className="title main">Compra Fácil By</h1></Link>
            
            <div className="dropdown-icon" onClick={() => setOpenDropdown(!openDropdown)}>
                {!openDropdown ? <IoMdMenu className="icon menu"/> : <IoMdClose  className="icon close"/>}
            </div>

            <div className={openDropdown ? 'dropdown' : 'dropdown hidden'}>
                <ul>
                    <li><Link className={location == '/' ? "link active" : "link"} to={'/'}>Inicio</Link></li>
                    <li><Link className={location == '/about' ? "link active" : "link"} to={'/about'}>Sobre</Link></li>
                </ul>
            </div>
        </header>
    )
}