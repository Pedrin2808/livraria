import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className='rodape'>
                <img src="/logo.png" alt="" height={120} />
            <div className='contato'>
                <h2>Contato</h2>
                <h3>(11) 91234-5678</h3>
                <h3>livrariafrei@gmail.com</h3>
            </div>
            <div className='desenvolvido'>
                <h2>Desenvolvido por</h2>
                <h3>Aluno 1 da Silva</h3>               
                <h3>Aluno 2 dos Santos</h3>               
                <h3>Aluno 3 teixeira Machado</h3>               
            </div>
            <div className='turma'>
                <h2>Turma</h2>
                <h3>Informática X</h3>
            </div>
            </div>
            <p>2025 @ Instituto Nossa Senhora de Fátima</p>
        </div>
    );
}