import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowUp } from "react-icons/fa";
import SearchBar from "../../components/SearchBar"; 
import { CATEGORIES, tags } from "../../services/tags-data";
import Card from "../../components/Card";

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
    const [products, setProducts] = useState([])
    const [allowed, setAllowed] = useState(false)
     
    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState('')
    const [parts, setParts] = useState(1)
    const [partsPrice, setPartsPrice] = useState(0)
    const [productLink, setProductLink] = useState('')
    const [image, setImage] = useState(null)

    const [showConfirmDeletion, setShowConfirmDeletion ] = useState(false)

    const [results, setResults] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        async function validateAccess() {
            await axios.get('https://compra-facil.onrender.com/admin/access', {withCredentials: true})
            .then(() => {
                setAllowed(true)
                getProducts()
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
        await axios.get('https://compra-facil.onrender.com/products')
        .then((data) => {
            setProducts(data.data)
        })
        .catch(err => {
            console.error('Algo deu errado ao buscar os produtos:', err)
        })
    }

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
        await axios.delete(`https://compra-facil.onrender.com/products/${id}`, {withCredentials: true})
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

    function handleBackToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
                
                <SearchBar setResults={setResults}/>

                <div className="products">
                    {results.length > 0 && results.map(p => {
                        return (
                            <Card product={p} handleDeleteProduct ={handleDeleteProduct} key={p._id}/>
                        )
                    })}

                    {products.length > 0 && results.length < 1 &&  products.map(p => {
                        return (
                           <Card product={p} handleDeleteProduct ={handleDeleteProduct} key={p._id}/>
                        )
                    })}
                </div>
            </div>

            <button className="btn top" onClick={() => handleBackToTop()}><FaArrowUp className="icon big"/></button>
        </div>
    )
}