import { FiShoppingBag } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";

export default function Header(){
    return (
        <header>
            <div className="header-icons">
                <BsLayoutSidebar className='icon normal' />
                <FiShoppingBag className='icon big' />
            </div>

            <h1 className="main-title">Nome da loja</h1>
        </header>
    )
}