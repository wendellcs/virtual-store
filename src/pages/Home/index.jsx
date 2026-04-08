import { useEffect, useState } from "react";
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Loading from "../../components/Loading";
import axios from 'axios'
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import Tags from "../../components/Tags";
import PageControls from "../../components/PageControls";
import Carousel from "../../components/Carousel";

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [menu, setMenu] = useState(false)
    
    const [productList, setProductList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    const [pageData, setPageData] = useState({})
    const [searchPageData, setSearchPageData] = useState({})
    const [results, setResults] = useState([])

    const [progress, setProgress] = useState(0)

    const isSearching = results.length > 0
    const activePageData = isSearching ? searchPageData : pageData

    useEffect(() => {
        async function getProducts() {
            setLoading(true)
            setProgress(70)
            await axios.get(`https://compra-facil.onrender.com/products?page=${currentPage}&limit=12`)
            .then((data) => {
                setProgress(100)
                setProductList(data.data.data)
                setPageData(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Erro ao buscar produtos:', err)
            })
        }
        getProducts()
    }, [currentPage])

    useEffect(() => {
        if (productList.length > 0 || results.length > 0){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    }, [productList, results])

    return (
        <div className="home-container">
            <div className="content-container">
                {/* Remover o setMenu / Menu */}
                <Header menu={menu} setmenu={setMenu}/>
                <Menu menu={menu}/> 

                <main className="content">
                    <SearchBar pageDependencies={{setResults, setSearchPageData, currentPage, setCurrentPage}}/>
                    {(!loading && !results.length > 0) &&
                        <section>
                            <h2 className="title subtitle">Destaques</h2>

                            <div className="top-products">
                                <Carousel/>
                            </div>
                        </section>
                    }

                    <section className="container-products">
                        <h2 className="title subtitle">Nossos produtos</h2>

                        <div className="products">

                            {loading && <Loading loadingType= '1' progress={progress}/>}
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
                    </section>

                {(productList.length > 0 || results.length > 0) && <PageControls pageControls = {{pageData: activePageData, currentPage, setCurrentPage}}/>}
                </main>
                <Footer/>
            </div>
        </div>
    )
}