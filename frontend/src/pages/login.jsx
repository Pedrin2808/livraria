import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import './login.scss';

export default function Sobre() {
    return (
        <div className="main">
            <div className="altura">
            <Cabecalho />

            <p>Bem-vindo à nossa tela de sobre! Aqui você encontrará informações sobre a nossa livraria, nossa missão de promover a leitura e o amor pelos livros, além de detalhes sobre nossa equipe apaixonada e os eventos que realizamos. Explore e descubra tudo o que temos a oferecer!</p>

            </div>

            <Footer />
        </div>
    );
}