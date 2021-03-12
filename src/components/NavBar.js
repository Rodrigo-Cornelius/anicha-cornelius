import React from 'react';
import styles from "./NavBar.module.css";


const NavBar = () => {
    return(
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark" id="testLink">
                        <a href="#testLink" className="navbar-brand">
                            <img src="/img/anichaLogo.png" alt="Logo de Anicha" width={110} height={110} className=" d-inline-block " />
                            <span className="d-none d-sm-inline"><strong className={styles.hidden}>Anicha</strong> Creaciones artesanales en madera</span>
                        </a>
                        <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="toggleMobileMenu">
                            <ul className="navbar-nav ms-auto text-center">
                                <li>
                                    <a className="nav-link" href="#testLink" >
                                        Inicio
                                    </a>
                                </li>
                                <li className=" nav-item dropdown">
                                    <a className="nav-link dropdown" href="#testLink"  id="navBarProductos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navBarProductos">
                                        <li><a className="dropdown-item" href="#testLink" >Macetas</a></li>
                                        <li><a className="dropdown-item" href="#testLink" >Percheros</a></li>
                                        <li><a className="dropdown-item" href="#testLink" >Muebles</a></li>
                                        <li><a className="dropdown-item" href="#testLink" >Especiales</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="nav-link" href="#testLink" >Ofertas</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#testLink" >Nosotros</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#testLink" >Contacto</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#testLink" >CARRITO</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar;