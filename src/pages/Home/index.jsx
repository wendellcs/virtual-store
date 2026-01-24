import { useEffect, useState } from "react";
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import axios from 'axios'

export default function Home() {
    const [menu, setMenu] = useState(false)

    const [productList, setProductList] = useState([])

    const [screenSize, setScreenSize] = useState(undefined)

    useEffect(() => {
        const size = window.screen.width
        setScreenSize(size)
    }, [])

    useEffect(() => {
        async function getProducts() {
            await axios.get('https://compra-facil.onrender.com/products')
            .then((data) => {
                setProductList(data.data)
            })
            .catch(err => {
                console.error('Erro ao buscar produtos:', err)
            })
        }

        getProducts()
    }, [])
    return (
        <div className="home-container">
            {screenSize >= 640 && <Menu menu={menu} menuStyle = {2}/>}
            

            <div className="content-container">
                <Header menu={menu} setmenu={setMenu} screenSize={screenSize}/>

                {screenSize < 640 && <Menu menu={menu} menuStyle = {1}/>}

                <main className="content">
                    <div className="search-container">
                        <CiSearch className="icon big search-icon"/>
                        <input type="text" placeholder="O que você está procurando?"/>
                    </div>

                    <div className="container-products">
                        <h2 className="title">Nossos produtos</h2>

                        <div className="products">
                            {productList.length > 0 && productList.map(p => {
                                return (
                                    <div className="card" key={p._id}>
                                        <div className="card-image">
                                            <img src={p.imageUrl} alt="Product-name image" />
                                            <p className="product-tag">{p.tag}</p>
                                        </div>

                                        <h3 className="product-name">{p.name}</h3>
                                        <div className="card-bottom">
                                            <div className="card-bottom-left">
                                                <p className="product-price">R$ {p.price}</p>
                                                <p className="product-price-card">Até {p.parts}x de R${p.partsPrice}</p>
                                            </div>
                                            <Link className="btn buy" target="_blank" to={p.productLink}><FiShoppingCart className="icon big cart"/></Link>
                                        </div>
                                    </div>
                                )
                            })}
                           
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}