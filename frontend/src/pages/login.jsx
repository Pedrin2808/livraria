import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import './login.scss';

export default function Sobre() {
    return (
        <div className="main">
            <div className="altura">
            <Cabecalho />

            <div className="inputs">
                <label htmlFor="">Usuario</label>
                <input type="text" />

                <label htmlFor="">Senha</label>
                <input type="text" />
            </div>
            <button>Entar</button>
            </div>

            <Footer />
        </div>
    );
}