import { FiShoppingBag } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header({}) {
    const currentPath = window.location.pathname

    return (
        <header>
            <div className="header-icons">
                {/* <BsLayoutSidebar className='icon normal' onClick={() => setSidebar(!sidebar)}/> */}
                <FiShoppingBag className='icon big shopping' />

                {currentPath === '/about' && <Link to={'/'}><BsArrow90DegLeft className="icon go-back"/></Link>}

            </div>

            <h1 className="title main">Compra Fácil</h1>
        </header>
    )
}