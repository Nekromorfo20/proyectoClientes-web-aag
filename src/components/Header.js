import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#!">
                <p className="d-none d-sm-block h2">Consulta de clientes</p>
                <i className="fas fa-users d-bloc d-sm-none h2"></i>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                                <i className="fas fa-home mr-2"></i>Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link"><i className="fas fa-phone-square mr-2"></i>Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link"><i className="fas fa-suitcase mr-2"></i>Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#!" className="nav-link"><i className="fas fa-question-circle mr-2"></i>Soporte</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)
export default Header