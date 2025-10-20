import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router";
import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import './login.scss';

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")

        if (nomeUsuario != undefined || nomeUsuario != null) {
            navigate('/')
        }
    }, [])

    async function entrar() {
        try {
            const body = {
                "usuario": usuario,
                "senha": senha
            }

            const response = await api.post('/entrar', body);
            const token = response.data.token;
            const nomeUsuario = response.data.usuario.usuario;

            localStorage.setItem("USUARIO", nomeUsuario)
            localStorage.setItem("TOKEN", token)
            
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="main">
            <div className="altura">
            <Cabecalho />

            <div className="corpo">

            <div className="inputs">

                <label>Usuário</label>
                <input className="usuario" type="text"  
                placeholder="Usuário" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
                />

                <label>Senha</label>
                <input type="password"
                placeholder="Senha" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)}
                />

            </div>
            </div>

            <div className="butao">
            <button onClick={entrar}>Entrar</button>
            </div>

            </div>

            <Footer />
        </div>
    );
}