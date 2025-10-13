import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import CartaoDestaque from "../components/cartaoDestaque";
import './inicio.scss';

const cartoes =
    [
        {
            "imagem": "https://st2.depositphotos.com/1163454/6060/v/450/depositphotos_60602675-stock-illustration-superhero-watch-2.jpg",
            "titulo": "Livro Super Herois",
            "descricao": "Em nossa livraria você vai encontrar livros de diversos heróis da atualidade!",
            "imgDireita": false,
            "linkDetalhe": "https://google.com"
        }, {
            "imagem": "https://images.vexels.com/media/users/3/284650/raw/25f925b741c0a43f4a60a98dedfaea58-meu-design-de-capa-de-livro-de-receitas-favorito.jpg",
            "titulo": "Livro de Receita",
            "descricao": "Se quer cozinhar algo gostoso, compre livros de receitas com tudo que precisa saber!",
            "imgDireita": true,
            "linkDetalhe": "https://globo.com"
        }
    ]

export default function Inicio() {
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

            </div>

            <Footer />
        </div>

    );

}