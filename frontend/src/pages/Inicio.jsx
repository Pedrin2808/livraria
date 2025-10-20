import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../api";
import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import CartaoDestaque from "../components/CartaoDestaque";
import './inicio.scss';



export default function Inicio() {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [livros, setLivros] = useState([])

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")

        // Se o usuário não estiver logado
        if (nomeUsuario == undefined || nomeUsuario == null) {
            navigate('/entrar')
        } else {
            setUsuario(nomeUsuario)
        }
    }, [])

    function sair() {
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/entrar')
    }

    async function listarLivros() {
        const reponse = await api.get('/livros')
        setLivros(reponse.data)
    } 

    return (
        <div className="main">

            <Cabecalho />

            <div className="altura">
                <p>Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>

                {
                    cartoes.map(c =>
                        <CartaoDestaque
                            imagem={c.imagem}
                            titulo={c.titulo}
                            descricao={c.descricao}
                            imgDireita={c.imgDireita}
                            linkDetalhe={c.linkDetalhe}
                        />
                    )
                }
                <div className="botao">
                <button onClick={listarLivros} >Listar</button>
                <button onClick={sair}>Sair</button>
                </div>

            </div>

            <Footer />
        </div>

    );

}