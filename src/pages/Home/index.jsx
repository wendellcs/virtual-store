import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Loading from "../../components/Loading";
import axios from 'axios'
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import Tags from "../../components/Tags";

export default function Home() {
    const [menu, setMenu] = useState(false)
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const [results, setResults] = useState([])

    const productsContainerRef = useRef(null)

    // useEffect(() => {
         // console.log(productsContainerRef.current.children?.length)
    // }, [productList])

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

    return (
        <div className="home-container">
            <div className="content-container">
                <Header menu={menu} setmenu={setMenu}/>
                <Menu menu={menu}/> 

                <main className="content">
                    <SearchBar setResults={setResults}/>

                    {/* <Tags/> */}

                    <div className="container-products">
                        <h2 className="title subtitle">Nossos produtos</h2>

                        <div className="products" ref={productsContainerRef}>

                            {loading && <Loading/>}
                            {results.length > 0 && results.map(p => {
                                return (
                                    <Card product={p} key={p._id}/>
                                )})
                            }

                            {productList.length > 0 && results.length < 1 && productList.map(p => {
                                return (
                                   <Card product={p} key={p._id}/>
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