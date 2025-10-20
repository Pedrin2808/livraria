import './cabecalho.scss';
import { Link } from 'react-router';

export default function Cabecalho() {
    return(
        <div>
         <div className="cabecalho">
            <img src="/logo.png" alt="" height={120} />
            <h1>Livraria Frei</h1>
            <div className='nav'>
                <Link to= "/">Início</Link>
                <Link to= "/sobre">Sobre</Link>
            </div>
        </div>   
            <div className='linha'></div>
        </div>
        
    );
}