import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss';

export const NavBar = () => {

    return (
        <header className="header">

            <Link to="/"><h1>El Jaugar</h1></Link>

            <nav>
                <ul>
                    <li><Link to="listcomplet">E-comerse</Link></li>
                    <li><Link to="list/Encendido">Bujias</Link></li>
                    <li><Link to="list/luces">Opticas</Link></li>
                    <li><Link to="list/agua">Refrigeracion</Link></li>
                </ul>
            </nav>
            <Link to="CartView"><CartWidget/></Link>
        </header>
    )
}