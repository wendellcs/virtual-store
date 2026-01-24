import axios from "axios"
import { CiSearch } from "react-icons/ci";

export default function SearchBar({setResults}){
    async function handleSearch(e) {
        const value = e.target.value
        if (value.length < 2){
            setResults([])
            return
        }

        await axios.get(`http://127.0.0.1:8000/products/search?q=${value}`)
        .then(data => {
            setResults(data.data)
        })
    }
    return (
        <div className="search-container">
            <CiSearch className="icon big search-icon"/>
            <input type="text" placeholder="O que você está procurando?" onChange={(e) => handleSearch(e)}/>
        </div>
    )
}