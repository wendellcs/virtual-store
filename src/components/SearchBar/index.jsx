import axios from "axios"
import { CiSearch } from "react-icons/ci";

export default function SearchBar({pageDependencies}){
    const {
        currentPage,
        setCurrentPage,
        setResults,
        setSearchPageData,
    } = pageDependencies;

    async function handleSearch(e) {
        const value = e.target.value
        if (value.length < 2){
            setResults([])
            setSearchPageData({})
            return
        }
        setCurrentPage(1)

        axios.get(`https://compra-facil.onrender.com/products/search?q=${value}&page=${currentPage}&limit=12`)
        .then(data => {
            setResults(data.data.data)
            setSearchPageData(data.data)
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err)
        })
    }
    return (
        <div className="search-container">
            <CiSearch className="icon big search-icon"/>
            <input type="text" placeholder="O que você está procurando?" onChange={(e) => handleSearch(e)}/>
        </div>
    )
}