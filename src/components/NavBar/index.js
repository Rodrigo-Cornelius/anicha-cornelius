import React from 'react';
import styles from "./NavBar.module.css";
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <>
            <header className={styles.header}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark" id="testLink">
                        <Link to='/' href="#testLink" className="navbar-brand">
                            <img src="/img/anichaLogo.png" alt="Logo de Anicha" width={110} height={110} className=" d-inline-block " />
                            <span className="d-none d-sm-inline"><strong className={styles.hidden}>Anicha</strong> Creaciones artesanales en madera</span>
                        </Link>
                        <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="toggleMobileMenu">
                            <ul className="navbar-nav ms-auto text-center">
                                <li>
                                    <Link to='/' className="nav-link"  >
                                        Inicio
                                    </Link>
                                </li>
                                <li className=" nav-item dropdown">
                                    <a className="nav-link dropdown me-lg-2" href="#testLink"  id="navBarProductos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navBarProductos">
                                        <li><Link to="/category/:1" className="dropdown-item"  >Macetas</Link></li>
                                        <li><Link to="/category/:2" className="dropdown-item"  >Percheros</Link></li>
                                        <li><Link to="/category/:3" className="dropdown-item"  >Muebles</Link></li>
                                        <li><Link to="/category/:4" className="dropdown-item"  >Especiales</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="nav-link me-lg-2" to='/' >Ofertas</Link>
                                </li>
                                <li>
                                    <Link className="nav-link me-lg-2" to='/' >Nosotros</Link>
                                </li>
                                <li>
                                    <Link className="nav-link me-lg-3" to='/'>Contacto</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to='/cart' ><CartWidget/></Link>
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