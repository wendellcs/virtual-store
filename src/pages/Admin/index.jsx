import { useState } from "react"
import axios from "axios"

export default function Admin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleFormSubmit(e){
        e.preventDefault()

        if (!email || !password){
            console.log('Preencha todos os campos')
            return
        }

        axios.post('http://127.0.0.1:8000/admin/login', {
            email,
            password
        })
        .then(res => {
            console.log(res, 'login status')
        })
        .catch(e => {
            console.error(err.response?.data);
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