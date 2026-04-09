import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading' 
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart, CiShare2  } from "react-icons/ci";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tags } from "../../services/tags-data";
import Carousel from '../../components/Carousel'

export default function Product(){
    const [product , setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        async function getProduct() {
            axios.get(`https://compra-facil.onrender.com/products/${id}`)
            .then(data => {
                setProduct(data.data)
                setLoading(false)
            })
            .catch(e => {
                console.error(e)
            })
        }

        getProduct()
    }, [id])

    useEffect(() => {
        window.scroll(0, 0)
    }, [product])

    return(
        <div id='product-page'>
            <Header/>
            <main className='main-product'>
                {loading && <Loading loadingType='0'/>}

                {product &&
                    <div className="main-product-content">
                        <div className="go-back">
                            <Link className='text' to={'/'}><MdKeyboardArrowLeft className='icon big'/>Voltar</Link>
                            <p className='text go-back-text'>/ {product.tag} / {product.name}</p>
                        </div>

                        <div className="image-container">
                            <img src={product.imageUrl} alt='Imagem do produto'/>
                        </div>

                        <div className="product-details">
                            <p className='tag'>{tags[product.tag]}</p>
                            <h1 className='product-name'>{product.name}</h1>
                        
                            <div className="product-details-price">
                                <div className="info">
                                    <p className='price'>{product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                                    <p className="parts">Até {product.parts}x de {product.partsPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                                </div>
                                <div className="trust">
                                    <div className="icon-frame">
                                        <IoShieldCheckmark className='icon'/>
                                    </div>
                                    
                                    <h2>Compra segura</h2>
                                    <p>Dados protegidos</p>
                                </div>
                            </div>

                            <Link className='btn buy' to={product.productLink} target='_blank'><FiShoppingCart className="icon big cart"/>Comprar</Link>

                            <div className="actions-container">
                                <button className='btn like'><CiHeart className='icon'/></button>
                                <button className='btn share'><CiShare2 className='icon'/></button>
                            </div>

                            <div className="other-products">
                                <h2 className='title subtitle'>Você também pode gostar</h2>
                            
                                <Carousel className='carousel'/>
                            </div>
                        </div>
                    </div>
                }
            </main>
            <Footer/>
        </div>
    )
}