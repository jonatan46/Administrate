import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss';

export const NavBar = () => {

    return (
        <header className="header">

            <h1>El Jaugar</h1>

            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="listcomplet">E-comerse</Link></li>
                    <li><Link to="list/Encendido">Bujias</Link></li>
                    <li><Link to="list/luces">Opticas</Link></li>
                    <li><Link to="list/agua">Refrigeracion</Link></li>
                    <li><Link to="contact">Contacto</Link></li>
                </ul>
            </nav>
            <Link to="/carrito"><CartWidget/></Link>
        </header>
    )
}