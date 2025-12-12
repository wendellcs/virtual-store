import { useEffect } from "react";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import axios from 'axios'

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
                                {/* <img src="" alt="Product-name image" /> */}

                                <h3 className="product-name">Nome do produto</h3>
                                <div className="card-bottom">
                                    <p className="product-price">R$ 149.99</p>
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