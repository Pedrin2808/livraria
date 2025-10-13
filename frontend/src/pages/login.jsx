import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import './login.scss';

export default function Sobre() {
    return (
        <div className="main">
            <div className="altura">
            <Cabecalho />

            <div className="corpo">

            <div className="inputs">

                <label>Usuário</label>
                <input className="usuario" type="text"/>

                <label>Senha</label>
                <input type="password"/>

            </div>
            </div>

            <div className="butao">
            <button>Entrar</button>
            </div>

            </div>

            <Footer />
        </div>
    );
}