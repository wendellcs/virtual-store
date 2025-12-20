import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){
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

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}