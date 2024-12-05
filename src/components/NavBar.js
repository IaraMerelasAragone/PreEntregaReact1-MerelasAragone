import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Tienda</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <CartWidget /> {}
                    </li>
                </ul>
            </div>
    </nav>
);
}

export default NavBar;
