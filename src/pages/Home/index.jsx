import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header"
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
    const [firstLoad, setFirstLoad] = useState(true)
    
    const isSearching = results.length > 0
    const activePageData = isSearching ? searchPageData : pageData

    const containerProductsRef = useRef(null)

    useEffect(() => {
        const controller = new AbortController()
        async function getProducts() {
            setLoading(true)
            setProgress(70)

            try {
                const data = await axios.get(`https://compra-facil.onrender.com/products?page=${currentPage}&limit=12`, {
                    signal: controller.signal
                })

                setProgress(100)
                setProductList(data.data.data)
                setPageData(data.data)
            } catch (err) {
                if (err.name !== 'CanceledError') {
                    console.error('Erro ao buscar produtos:', err)
                }
            } finally {
                setLoading(false)
            }
        }
        getProducts()

        return () => {
            controller.abort()
        }
    }, [currentPage])


    useEffect(() => {
        if (!pageData.page) return

        if (firstLoad) {
            setFirstLoad(false)
            return
        }

        if (!loading && containerProductsRef.current) {
            containerProductsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [pageData.page]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <div className="home-container">
            <div className="content-container">
                <Header menu={menu} setmenu={setMenu} />

                <main className="content">
                    <section id="banner">
                        <h1 className="title main">Tudo que você precisa,<br />em um só lugar.</h1>
                        <h2 className="title subtitle">Praticidade e segurança para suas compras do dia a dia.</h2>
                        <SearchBar pageDependencies={{ setResults, setSearchPageData, currentPage, setCurrentPage }} />
                    </section>
                    {(!loading && !results.length > 0) &&
                        <section id="highlights">
                            <h2 className="title subtitle">Destaques</h2>

                            <div className="top-products">
                                <Carousel />
                            </div>
                        </section>
                    }

                    <section className="container-products" ref={containerProductsRef}>
                        <h2 className="title subtitle">Nossos produtos</h2>

                        <div className="products">

                            {loading && <Loading loadingType='1' progress={progress} />}
                            {results.length > 0 && results.map(p => {
                                return (
                                    <Card product={p} key={p._id} />
                                )
                            })
                            }

                            {productList.length > 0 && results.length < 1 && productList.map(p => {
                                return (
                                    <Card product={p} key={p._id} />
                                )
                            })}

                        </div>
                    </section>

                    {(productList.length > 0 || results.length > 0) && <PageControls pageControls={{ pageData: activePageData, currentPage, setCurrentPage }} containerProductsRef={containerProductsRef} />}
                </main>
                <Footer />
            </div>
        </div>
    )
}