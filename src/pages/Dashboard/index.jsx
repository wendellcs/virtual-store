import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowUp } from "react-icons/fa";
import SearchBar from "../../components/SearchBar"; 
import { CATEGORIES, tags } from "../../services/tags-data";
import Card from "../../components/Card";
import PageControls from "../../components/PageControls";

function ConfirmDeletion(){
    return (
        <div className="confirm-deletion">
            <p className="text big">Deseja deletar esse produto?</p>

            <div>
                <button className="btn option confirm">Sim</button>
                <button className="btn option cancel">Não</button>
            </div>
        </div>
    )
}

export default function Dashboard(){
    const [productList, setProductList] = useState([])
    
    const [pageData, setPageData] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    const [searchPageData, setSearchPageData] = useState({})
    const [results, setResults] = useState([])
    
    const isSearching = results.length > 0
    const activePageData = isSearching ? searchPageData : pageData

    const [allowed, setAllowed] = useState(false)
     
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState('')
    const [parts, setParts] = useState(1)
    const [partsPrice, setPartsPrice] = useState(0)
    const [productLink, setProductLink] = useState('')
    const [image, setImage] = useState(null)

    const [showConfirmDeletion, setShowConfirmDeletion ] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        async function validateAccess() {
            await axios.get('https://compra-facil.onrender.com/admin/access', {withCredentials: true})
            .then(() => {
                setAllowed(true)
            })
            .catch(err => {
                if (err.response?.status === 401){
                    navigate('/')
                }
            })
        }
        validateAccess()
    }, [])

    async function getProducts() {
        await axios.get(`https://compra-facil.onrender.com/products?page=${currentPage}&limit=12`)
        .then((data) => {
            setProductList(data.data.data)
            setPageData(data.data)
        })
        .catch(err => {
            console.error('Algo deu errado ao buscar os produtos:', err)
        })
    }

    useEffect(() => {
        getProducts()
    }, [currentPage])

    async function handleFormSubmit(e){
        e.preventDefault()

        if (!name || !tag || !price || !parts || !partsPrice || !productLink || !image){
            alert('Por favor, preencha todos os campos.')
            return
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('tag', tag)
        formData.append('price', Number(price))
        formData.append('parts', Number(parts))
        formData.append('partsPrice', Number(partsPrice))
        formData.append('productLink', productLink)
        formData.append('image', image)

        await axios.post('https://compra-facil.onrender.com/products', formData, {withCredentials: true})
        .then(() => {
            alert('Produto cadastrado com sucesso!')
            getProducts()
        })
        .catch(err => {
            console.error('Erro ao cadastrar produto:', err)
        })
    }

    async function handleDeleteProduct(id) {
        await axios.delete(`http://127.0.0.1:8000/products/${id}`, {withCredentials: true})
        .then(() => {
            getProducts()
        })
        .catch(err => {
            console.error('Erro ao deletar produto:', err)
        })
    }

    async function handleLogout() {
        await axios.post('https://compra-facil.onrender.com/admin/logout',{}, {withCredentials: true})
        .then(() => {
            setAllowed(false)
            navigate('/')
        })
        .catch(err => {
            console.error('Erro ao sair:', err)
        })
    }

    return (
        <div className="dashboard-container">
            <button className="btn logout" onClick={() => handleLogout()}>Sair</button>
            <h1 className="title main">Dashboard</h1>

            <h2 className="title subtitle">
                Aqui você irá criar os produtos
            </h2>

            <form onSubmit={e => handleFormSubmit(e)}>
                <h3 className="title small">Insira as informações do produto</h3>

                <div className="box">
                    <label htmlFor="product-name">Nome</label>
                    <input type="text" id="product-name" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="box">
                    <label htmlFor="tag">Categoria</label>
                    <select value={tag} id="tag" onChange={e => setTag(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        
                        {Object.entries(CATEGORIES).map(([groupLabel, items]) => {
                            return(
                                <optgroup key={groupLabel} label={groupLabel}>
                                    {Object.entries(items).map(([value, label]) => (
                                        <option key={value} value={value}>
                                        {label}
                                        </option>
                                    ))}
                                </optgroup>
                            )
                        })}
                    </select>
                </div>

                <div className="box">
                    <label htmlFor="product-price">Preço</label>
                    <input type="number" id="product-price" min={0} step={0.01} value={price} onChange={e => setPrice(e.target.value)}/>
                </div>

                <div className="box">
                    <div>
                        <label htmlFor="product-price-part">Quantidade máxima de parcelas</label>
                        <input type="number" id="product-price-part" min={1} step={1} value={parts} onChange={e => setParts(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="product-price-card">Valor das parcelas</label>
                        <input type="number" id="product-price-card" min={0} step={0.01} value={partsPrice} onChange={e => setPartsPrice(e.target.value)}/>
                    </div>
                </div>

                <div className="box">
                    <div>
                        <label htmlFor="product-link">Link do produto</label>
                        <input type="text" id="product-link" value={productLink} onChange={e => setProductLink(e.target.value)}/>
                    </div>
                </div>

                <div className="box">
                    <label htmlFor="img">Imagem do produtos ( jpeg, png ou webp )</label>
                    {image && (
                        <img src={URL.createObjectURL(image)} alt="Imagem do produto" />
                    )}
                    <input id="img" type="file" accept="image/" onChange={e => setImage(e.target.files[0])}/>
                </div>

                <button className="btn product-submit">Enviar produto</button>
            </form>

            <div className="products-container">
                <h2 className="title subtitle">Produtos já cadastrados</h2>
                
                <SearchBar pageDependencies={{setResults, setSearchPageData, currentPage, setCurrentPage}}/>

                <div className="products">
                    {results.length > 0 && results.map(p => {
                        return (
                            <Card product={p} handleDeleteProduct ={handleDeleteProduct} key={p._id}/>
                        )
                    })}

                    {productList.length > 0 && results.length < 1 && productList.map(p => {
                        return (
                           <Card product={p} handleDeleteProduct ={handleDeleteProduct} key={p._id}/>
                        )
                    })}
                </div>
            </div>

                {(productList.length > 0 || results.length > 0) && <PageControls pageControls = {{pageData: activePageData, currentPage, setCurrentPage}}/>}

            <button className="btn top" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth'})
            }}><FaArrowUp className="icon big"/></button>
        </div>
    )
}