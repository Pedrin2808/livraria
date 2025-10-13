import './index.scss'

export default function CartaoDestaque({imagem, titulo, descricao, imgDireita, linkDetalhe}) {
    return (
        <div className="cartaoDestaque">
            <div className= {`imagem ${imgDireita ? "direita" : ""}`}>
                <img src={imagem} />
            </div>

            <div className="info">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <a href={linkDetalhe}>Clique aqui</a>
            </div>
        </div>
    );
}