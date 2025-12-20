import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){
    const [tag, setTag] = useState('')
    const [image, setImage] = useState(null)

    const navigate = useNavigate()
    useEffect(() => {
        async function validateAccess() {
            await axios.get('http://localhost:8000/admin/access', {withCredentials: true})
            .catch(err => {
                if (err.response?.status === 401){
                    navigate('/')
                }
            })
        }

        validateAccess()
    }, [])

    function handleFormSubmit(e){
        e.preventDefault
    }
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>

            <h2>
                Aqui você irá criar os produtos
            </h2>

            <form onSubmit={e => handleFormSubmit(e)}>
                <h3>Insira as informações do produto</h3>

                <div className="box">
                    <label htmlFor="product-name">Nome</label>
                    <input type="text" id="product-name"/>
                </div>

                <div className="box">
                    <label htmlFor="product-description">Descrição ( caracteristicas )</label>
                    <input type="text" id="product-description"/>
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
                    <input type="number" id="product-price" min={0}/>
                </div>

                <div className="box">
                    <div>
                        <label htmlFor="product-price-part">Quantidade máxima de parcelas</label>
                        <input type="number" id="product-price-part" min={1}/>
                    </div>
                    <div>
                        <label htmlFor="product-price-card">Valor das parcelas</label>
                        <input type="number" id="product-price-card" min={0}/>
                    </div>
                </div>

                <div className="box">
                    <label htmlFor="img">Imagem do produtos ( jpeg, png ou webp )</label>
                    {image && (
                        <img src={URL.createObjectURL(image)} alt="Imagem do produto" />
                    )}
                    <input id="img" type="file" accept="image/" onChange={e => setImage(e.target.files[0])}/>

                </div>

                <button className="btn product">Enviar produto</button>
            </form>
        </div>
    )
}