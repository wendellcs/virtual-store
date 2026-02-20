import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import { tags } from "../../services/tags-data";
import axios from "axios";

export default function Card({product, handleDeleteProduct = null}){
    const location = window.location.pathname

    async function HandleNewClick(id){
        axios.patch(`https://compra-facil.onrender.com/products/${id}/view`)
        .then(() => {
            
        }).catch((e) => {
            console.error('Erro ao atualizar visualizações do item.', e)
        })
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={product.imageUrl} alt="Product-name image" />
                <p className="product-tag">{tags[product.tag]}</p>
            </div>

            <h3 className="product-name">{product.name}</h3>
            <div className="card-bottom">
                <div className="card-bottom-left">
                    <p className="product-price">{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                    <p className="product-price-card">Até {product.parts}x de {product.partsPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                </div>

                {location === '/admin/dashboard' ? <button className="btn delete" onClick={() => handleDeleteProduct(product._id)}>Excluir</button> 
                : <Link className="btn buy" onClick={() => HandleNewClick(product._id)} to={`/products/${product.slug}/${product._id}`}><FiShoppingCart className="icon big cart"/>Ver produto</Link>}
                
            </div>
        </div>
    )
}