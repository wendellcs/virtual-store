import { IoHomeOutline, IoShirtOutline, IoPricetagOutline } from "react-icons/io5"
import { FiSmartphone, FiWatch, FiShoppingBag } from "react-icons/fi";
import { CiStar, CiLaptop, CiHeadphones } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function Menu({menu, menuStyle}){
    const [showDropdown, setShowDropdown] = useState(null)

    const toggleDropdown = (menu) => {
        setShowDropdown(prev => prev === menu ? null : menu)
    }

    useEffect(() => {
        console.log(showDropdown)
    },[showDropdown])

    return (
        <>
        {menuStyle === 1 ? 
            <div className={`mobile-menu`}>
                <ul className={showDropdown == "shortcut" ? "dropdown show" : "dropdown"}>
                    <li><button className="btn menu"><IoPricetagOutline  className="icon small"/> Ofertas do dia</button></li>
                    <li><button className="btn menu"><FiShoppingBag className="icon small"/> Mais vendidas</button></li>
                    <li><button className="btn menu"><CiStar className="icon small"/>Promoções</button></li>
                </ul>
            </div>
        :
            <div>
                <div className="box main">
                    <h2 className="menu-title">Menu principal</h2>

                    <ul>
                        <li><button className="btn menu"><IoHomeOutline className="icon normal side"/> Inicio</button></li>
                        <li><button className="btn menu"><CiStar className="icon normal side"/> Promoções</button></li>
                    </ul>
                </div>

                <div className="box category">
                    <h2 className="menu-title">Categorias</h2>

                    <ul>
                        <li><button className="btn menu"><CiLaptop className="icon normal side"/> Eletrônicos</button></li>
                        <li><button className="btn menu"><IoShirtOutline className="icon normal side"/> Roupas</button></li>
                        <li><button className="btn menu"><FiSmartphone className="icon normal side"/> Smartphones</button></li>
                        <li><button className="btn menu"><FiWatch className="icon normal side"/> Relógios</button></li>
                        <li><button className="btn menu"><CiHeadphones className="icon normal side"/> Áudio</button></li>
                    </ul>
                </div>

                <div className="box shortcut">
                    <h2 className="menu-title">Ações rápidas</h2>

                    <ul>
                        <li><button className="btn menu"><IoPricetagOutline  className="icon normal side"/> Ofertas do dia</button></li>
                        <li><button className="btn menu"><FiShoppingBag className="icon normal side"/> Mais vendidas</button></li>
                    </ul>
                </div>
            </div>
        }
        </>
    )
}