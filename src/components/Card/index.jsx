import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import { tags } from "../../services/tags-data";

export default function Card({product, handleDeleteProduct = null}){
    const location = window.location.pathname

    return (
        <div className="card">
            <div className="card-image">
                <img src={product.imageUrl} alt="Product-name image" />
                <p className="product-tag">{tags[product.tag]}</p>
            </div>

            <h3 className="product-name">{product.name}</h3>
            <div className="card-bottom">
                <div className="card-bottom-left">
                    <p className="product-price">R$ {product.price}</p>
                    <p className="product-price-card">Até {product.parts}x de R${product.partsPrice}</p>
                </div>

                {location === '/admin/dashboard' ? <button className="btn delete" onClick={() => handleDeleteProduct(product._id)}>Excluir</button> 
                : <Link className="btn buy" target="_blank" to={product.productLink}><FiShoppingCart className="icon big cart"/></Link>}
                
            </div>
        </div>
    )
}