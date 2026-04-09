import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-icon.png'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Header({}) {
    const [openDropdown, setOpenDropdown] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const location = window.location.pathname

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={ scrolled && !openDropdown ? 'scrolled' : ''}>
            <div className="upper-container">
                <div className="logo">
                    <img src={logo} alt="Logo Compra Fácil By" />
                </div>
                <Link to={'/'}><h2 className="title main">Compra Fácil By</h2></Link>

                <nav className="desktop-links">
                    <Link className="link" to={'/'}>Inicio</Link>
                    <Link className="link" to={'/about'}>Sobre</Link>
                </nav>
                
                <div className="dropdown-icon" onClick={() => setOpenDropdown(!openDropdown)}>
                    {!openDropdown ? <IoMdMenu className="icon menu"/> : <IoMdClose  className="icon close"/>}
                </div>
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