import { useEffect } from "react";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import axios from 'axios'
import imageTest from './teste.avif'

export default function Home() {

    useEffect(() => {
        async function testApi() {
            const data = await axios.get('http://127.0.0.1:8000/')
            console.log(data, ' aqui')
        }

        testApi()
    }, [])
    return (
        <div className="home-container">
            <Sidebar/>

            <div className="content-container">
                <Header/>

                <main className="content">
                    <div className="search-container">
                        <CiSearch className="icon big search-icon"/>
                        <input type="text" placeholder="O que você está procurando?"/>
                    </div>

                    <div className="container-products">
                        <h2 className="title">Nossos produtos</h2>

                        <div className="products">
                            <div className="card">
                                <div className="card-image">
                                    <img src={imageTest} alt="Product-name image" />
                                    <p className="product-tag">TVs</p>
                                </div>

                                <h3 className="product-name">Smart TV 32 Philco Led</h3>
                                <div className="card-bottom">
                                    <div className="card-bottom-left">
                                        <p className="product-price">R$ 889</p>
                                        <p className="product-price-card">18x R$ 94.88</p>
                                    </div>
                                    <button className="btn buy"><FiShoppingCart className="icon big cart"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}