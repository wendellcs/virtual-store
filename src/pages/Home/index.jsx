import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Loading from "../../components/Loading";
import axios from 'axios'
import Footer from "../../components/Footer";

export default function Home() {
    const [menu, setMenu] = useState(false)
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const [results, setResults] = useState([])

    const productsContainerRef = useRef(null)

    useEffect(() => {
        console.log(productsContainerRef.current.children?.length)
        console.log(productsContainerRef)
    }, [productList])

    useEffect(() => {
        async function getProducts() {
            setLoading(true)
            await axios.get('https://compra-facil.onrender.com/products')
            .then((data) => {
                setProductList(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Erro ao buscar produtos:', err)
            })
        }

        getProducts()
    }, [])

    async function handleSearch(e) {
        const value = e.target.value
        if (value.length < 2){
            setResults([])
            return
        }

        await axios.get(`http://127.0.0.1:8000/products/search?q=${value}`)
        .then(data => {
            setResults(data.data)
        })
    }

    return (
        <div className="home-container">
            {/* <Menu menu={menu}/> */}

            <div className="content-container">
                <Header menu={menu} setmenu={setMenu}/>

                <Menu menu={menu}/>

                <main className="content">
                    <div className="search-container">
                        <CiSearch className="icon big search-icon"/>
                        <input type="text" placeholder="O que você está procurando?" onChange={(e) => handleSearch(e)}/>
                    </div>

                    <div className="container-products">
                        <h2 className="title subtitle">Nossos produtos</h2>

                        <div className="products" ref={productsContainerRef}>

                            {loading && <Loading/>}
                            {results.length > 0 && results.map(p => {
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
                                )})
                                
                            }

                            {productList.length > 0 && results.length < 1 && productList.map(p => {
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

                <Footer/>
            </div>

        </div>
    )
}