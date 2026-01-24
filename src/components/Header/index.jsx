import { FiShoppingBag } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";
import { useEffect } from "react";

export default function Header({screenSize ,sidebar , setSidebar}) {

    return (
        <header>
            <div className="header-icons">
                <BsLayoutSidebar className='icon normal' onClick={() => setSidebar(!sidebar)}  style={screenSize < 640 ? {display: "none"} : {display: "block"}}/>
                <FiShoppingBag className='icon big shopping' />
            </div>

            <h1 className="title main">Compra Fácil</h1>
        </header>
    )
}