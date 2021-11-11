import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.scss';

export const NavBar = () => {

    return (
        <header className="header">

            <h1>El Jaugar</h1>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>E-comerse</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}