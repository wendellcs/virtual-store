import { IoHomeOutline, IoShirtOutline, IoPricetagOutline } from "react-icons/io5"
import { FiSmartphone, FiWatch, FiShoppingBag } from "react-icons/fi";
import { CiStar, CiLaptop, CiHeadphones } from "react-icons/ci";

export default function Sidebar({sidebar}){
    return (
        <div className={`sidebar-container ${sidebar ? 'hidden' : ''}`}>
            <div className="box">
                <h2 className="sidebar-title">Menu principal</h2>

                <ul>
                    <li><button className="btn sidebar"><IoHomeOutline className="icon normal side"/> Inicio</button></li>
                    <li><button className="btn sidebar"><CiStar className="icon normal side"/> Promoções</button></li>
                </ul>
            </div>

            <div className="box">
                <h2 className="sidebar-title">Categorias</h2>

                <ul>
                    <li><button className="btn sidebar"><CiLaptop className="icon normal side"/> Eletrônicos</button></li>
                    <li><button className="btn sidebar"><IoShirtOutline className="icon normal side"/> Roupas</button></li>
                    <li><button className="btn sidebar"><FiSmartphone className="icon normal side"/> Smartphones</button></li>
                    <li><button className="btn sidebar"><FiWatch className="icon normal side"/> Relógios</button></li>
                    <li><button className="btn sidebar"><CiHeadphones className="icon normal side"/> Áudio</button></li>
                </ul>
            </div>

            <div className="box">
                <h2 className="sidebar-title">Ações rápidas</h2>

                <ul>
                    <li><button className="btn sidebar"><IoPricetagOutline  className="icon normal side"/> Ofertas do dia</button></li>
                    <li><button className="btn sidebar"><FiShoppingBag className="icon normal side"/> Mais vendidas</button></li>
                </ul>
            </div>
        </div>
    )
}