import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Admin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleFormSubmit(e){
        e.preventDefault()

        if (!email || !password){
            alert('Preencha todos os campos')
            return
        }

        axios.post('https://compra-facil.onrender.com/admin/login', {
            email,
            password
        },{ withCredentials: true })
        .then(() => {
            navigate('/admin/dashboard')
        })
        .catch(e => {
            console.error(e.response?.data);
        })

    }

    return (
        <div className="admin-container">
            <h1>Compra Fácil</h1>
            <h2>Faça login para ter acesso ao dashboard</h2>

            <form onSubmit={e => handleFormSubmit(e)}>
                <div className="box">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="box">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button className="btn login">Entrar</button>
            </form>
        </div>
    )
}