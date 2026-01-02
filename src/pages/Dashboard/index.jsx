import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";

export default function Dashboard(){
    const [products, setProducts] = useState([])
    const [allowed, setAllowed] = useState(false)
     
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState('')
    const [price, setPrice] = useState('')
    const [parts, setParts] = useState(1)
    const [partsPrice, setPartsPrice] = useState(0)
    const [productLink, setProductLink] = useState('')
    const [image, setImage] = useState(null)


    const navigate = useNavigate()
    useEffect(() => {
        async function validateAccess() {
            await axios.get('http://localhost:8000/admin/access', {withCredentials: true})
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
        await axios.get('http://localhost:8000/products')
        .then((data) => {
            setProducts(data.data)
        })
        .catch(err => {
            console.error('Algo deu errado ao buscar os produtos:', err)
        })
    }

    async function handleFormSubmit(e){
        e.preventDefault()

        if (!name || !description || !tag || !price || !parts || !partsPrice || !productLink || !image){
            alert('Por favor, preencha todos os campos.')
            return
        }

        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('tag', tag)
        formData.append('price', Number(price))
        formData.append('parts', Number(parts))
        formData.append('partsPrice', Number(partsPrice))
        formData.append('productLink', productLink)
        formData.append('image', image)

        await axios.post('http://localhost:8000/products', formData, {withCredentials: true})
        .then(() => {
            alert('Produto cadastrado com sucesso!')
            getProducts()
        })
        .catch(err => {
            console.error('Erro ao cadastrar produto:', err)
        })
    }

    async function handleDeleteProduct(id) {
        await axios.delete(`http://localhost:8000/products/${id}`, {withCredentials: true})
        .then((data) => {
            getProducts()
        })
        .catch(err => {
            console.error('Erro ao deletar produto:', err)
        })
    }

    async function handleLogout() {
        await axios.post('http://localhost:8000/admin/logout',{}, {withCredentials: true})
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
            <h1>Dashboard</h1>

            <h2>
                Aqui você irá criar os produtos
            </h2>

            <form onSubmit={e => handleFormSubmit(e)}>
                <h3>Insira as informações do produto</h3>

                <div className="box">
                    <label htmlFor="product-name">Nome</label>
                    <input type="text" id="product-name" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="box">
                    <label htmlFor="product-description">Descrição ( caracteristicas )</label>
                    <input type="text" id="product-description" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div className="box">
                    <label htmlFor="tag">Categoria</label>
                    <select value={tag} id="tag" onChange={e => setTag(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        
                        {/* Tecnologia */}
                        <option value="tvs">TVs</option>
                        <option value="smartphones">Smartphones</option>
                        <option value="tablets">Tablets</option>
                        <option value="notebooks">Notebooks</option>
                        <option value="computadores">Computadores</option>
                        <option value="monitores">Monitores</option>
                        <option value="perifericos">Periféricos</option>
                        <option value="componentes">Componentes</option>
                        <option value="armazenamento">Armazenamento</option>
                        <option value="redes">Redes & Roteadores</option>
                        <option value="automacao-residencial">Automação Residencial</option>

                        {/* Games */}
                        <option value="consoles">Consoles</option>
                        <option value="jogos">Jogos</option>
                        <option value="acessorios-gamer">Acessórios Gamer</option>

                        {/* Áudio e Vídeo */}
                        <option value="audio">Áudio</option>
                        <option value="video">Vídeo</option>
                        <option value="projetores">Projetores</option>
                        <option value="cameras">Câmeras</option>
                        <option value="drones">Drones</option>

                        {/* Casa e Eletrodomésticos */}
                        <option value="eletrodomesticos">Eletrodomésticos</option>
                        <option value="moveis">Móveis</option>
                        <option value="iluminacao">Iluminação</option>
                        <option value="organizacao">Organização</option>
                        <option value="climatizacao">Climatização</option>

                        {/* Cozinha */}
                        <option value="cozinha">Cozinha</option>

                        {/* Moda */}
                        <option value="roupas">Roupas</option>
                        <option value="calcados">Calçados</option>
                        <option value="acessorios-moda">Acessórios de Moda</option>

                        {/* Beleza e Saúde */}
                        <option value="beleza">Beleza</option>
                        <option value="saude">Saúde</option>
                        <option value="cosmeticos">Cosméticos</option>

                        {/* Esporte e Lazer */}
                        <option value="esporte">Esporte</option>
                        <option value="fitness">Fitness</option>
                        <option value="musculacao">Musculação</option>

                        {/* Automotivo */}
                        <option value="automotivo">Automotivo</option>

                        {/* Ferramentas */}
                        <option value="ferramentas">Ferramentas</option>
                        <option value="ferramentas-eletricas">Ferramentas Elétricas</option>
                        <option value="ferramentas-manuais">Ferramentas Manuais</option>

                        {/* Música */}
                        <option value="instrumentos-musicais">Instrumentos Musicais</option>

                        {/* Infantil */}
                        <option value="brinquedos">Brinquedos</option>
                        <option value="infantil">Infantil</option>

                        {/* Pet */}
                        <option value="petshop">Pet Shop</option>
                        <option value="acessorios-pet">Acessórios Pet</option>

                        {/* Papelaria e Educação */}
                        <option value="papelaria">Papelaria</option>
                        <option value="materiais-escolares">Materiais Escolares</option>
                        <option value="livros">Livros</option>
                        <option value="cursos">Cursos</option>

                        {/* Outros */}
                        <option value="decoracao">Decoração</option>
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
                <h2>Produtos já cadastrados</h2>

                <div className="box">
                    <CiSearch className="icon big search-icon"/>
                    <input type="text" placeholder="TVs..."/>
                </div>

                <div className="products">
                    {products.length > 0 && products.map(p => {
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
                                        <p className="product-price-card">{p.price_card}</p>
                                    </div>

                                    <button className="btn delete" onClick={() => handleDeleteProduct(p._id)}>Excluir</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <button className="btn top" onClick={() => handleBackToTop()}><FaArrowUp className="icon big"/></button>
        </div>
    )
}