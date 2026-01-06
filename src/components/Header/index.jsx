import { FiShoppingBag } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";

export default function Header({sidebar , setSidebar}) {
    return (
        <header>
            <div className="header-icons">
                <BsLayoutSidebar className='icon normal' onClick={() => setSidebar(!sidebar)} />
                <FiShoppingBag className='icon big' />
            </div>

            <h1 className="main-title">Compra Fácil</h1>
        </header>
    )
}