import { IoPricetagOutline } from "react-icons/io5"
import { FiShoppingBag } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

export default function Menu(){
    return (
        <div className={`mobile-menu`}>
            <ul>
                <li><button className="btn menu"><IoPricetagOutline  className="icon small"/>Em alta</button></li>
                <li><button className="btn menu"><FiShoppingBag className="icon small"/> Mais vendidas</button></li>
                <li><button className="btn menu"><CiStar className="icon small"/>Promoções</button></li>
            </ul>
        </div>
    )
}