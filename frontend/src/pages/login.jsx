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
                <label htmlFor="">Usuario</label>
                <input className="usuario" type="text" />

                <label htmlFor="">Senha</label>
                <input className="password" type="text" />
            </div>
            </div>
            <button className="butao">Entrar</button>
            </div>

            <Footer />
        </div>
    );
}