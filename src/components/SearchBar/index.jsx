import axios from "axios"
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function SearchBar({pageDependencies}){
    const {
        currentPage,
        setCurrentPage,
        setResults,
        setSearchPageData,
    } = pageDependencies;

    const [query, setQuery] = useState('')

    useEffect(() => {
        async function handleSearch() {
            if (query.length < 2){
                setResults([])
                setSearchPageData({})
                return
            }
            setCurrentPage(1)

            axios.get(`https://compra-facil.onrender.com/products/search?q=${query}&page=${currentPage}&limit=12`)
            .then(data => {
                setResults(data.data.data)
                setSearchPageData(data.data)
            })
            .catch(err => {
                console.error('Erro ao buscar produtos:', err)
            })
        }

        handleSearch()
    }, [query])
    
    return (
        <div className="search-container">
            <CiSearch className="icon big search-icon"/>

            {query.length > 0 && <IoMdClose className="icon big clean-icon" onClick={() => setQuery('')} />}
            <input type="text" placeholder="O que você está procurando?" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}