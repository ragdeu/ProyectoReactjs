import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown.js';

//MUI
import MenuIcon from '@mui/icons-material/Menu';

//Logo
import logo_mano from '../../img/Logo/logo_mano.png';

//Estilos
import './NavBar.css';

//Components
import CartWidget from '../../components/CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to='/' style={{ textDecoration: 'none' }}>
                    <img src={logo_mano} alt="imagen logo" width="60" />
                    <h3 className="logo">Ragde T-Shirt</h3>
                </Link>
                <ul className="navbar-nav">
                    <Link className="nav-link" to='/items' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            PRODUCTOS
                        </li>
                    </Link>
                    <Link className="nav-link" to='/category/Men' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            MEN
                        </li>
                    </Link>
                    <Link className="nav-link" to='/category/Women' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            WOMEN
                        </li>
                    </Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">ARTIST</a>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to='/artist/acdc' style={{ textDecoration: 'none' }}>
                                <li>AC/DC</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Black Sabbath' style={{ textDecoration: 'none' }}>
                                <li>Black Sabbath</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Foo Fighters' style={{ textDecoration: 'none' }}>
                                <li>Foo Fighters</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Guns N Roses' style={{ textDecoration: 'none' }}>
                                <li>Guns N Roses</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Iron Maiden' style={{ textDecoration: 'none' }}>
                                <li>Iron Maiden</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Kiss' style={{ textDecoration: 'none' }}>
                                <li>Kiss</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Led Zeppelin' style={{ textDecoration: 'none' }}>
                                <li>Led Zeppelin</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/metallica' style={{ textDecoration: 'none' }}>
                                <li>Metallica</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Motorhead' style={{ textDecoration: 'none' }}>
                                <li>Motorhead</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Nirvana' style={{ textDecoration: 'none' }}>
                                <li>Nirvana</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Pink Floyd' style={{ textDecoration: 'none' }}>
                                <li>Pink Floyd</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Queen' style={{ textDecoration: 'none' }}>
                                <li>Queen</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Ramones' style={{ textDecoration: 'none' }}>
                                <li>Ramones</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Red Hot Chili Peppers' style={{ textDecoration: 'none' }}>
                                <li>Red Hot Chili Peppers</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Beatles' style={{ textDecoration: 'none' }}>
                                <li>The Beatles</li>
                            </Link>
                            <Link className="dropdown-item" to='/artist/Rolling Stones' style={{ textDecoration: 'none' }}>
                                <li>The Rolling Stones</li>
                            </Link>
                        </ul>
                    </li>
                    <Link className="nav-link" to='/' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            STORES
                        </li>
                    </Link>
                </ul>
                <div className='btn-responsive-menu'>
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"><MenuIcon /></a>
                    <ul className="dropdown-menu dropdown-responsive">
                        <Link className="dropdown-item" to='/items' style={{ textDecoration: 'none' }}>
                            <li className="nav-item nav-item-resposive">
                                PRODUCTOS
                            </li>
                        </Link>
                        <Link className="dropdown-item" to='/category/Men' style={{ textDecoration: 'none' }}>
                            <li className="nav-item nav-item-resposive">
                                MEN
                            </li>
                        </Link>
                        <Link className="dropdown-item" to='/category/Women' style={{ textDecoration: 'none' }}>
                            <li className="nav-item nav-item-resposive">
                                WOMEN
                            </li>
                        </Link>
                    </ul>
                </div>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <CartWidget />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
