/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Css/Footer.css';


const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo text-center">
                                    <a  href="/">
                                        <img 
                                            src={Logo}
                                            width="250px" 
                                            alt="Logo" 
                                            id="logo"
                                        />
                                    </a>
                                    <a 
                                        href='https://it-devs.ga/' 
                                        target='blank' 
                                        className="badge p-2 Brand"
                                    >
                                        IT-Devs - Design & Development
                                    </a>
                                    <p className='mt-2'>©Todos los derechos reservados 2021</p>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Novedades</h4>
                                <ul>
                                    <li><a href="/#services">Servicios</a></li>
                                    <li><a href="/#prices">Planes</a></li><br/><br/>
                                    <a href='#' onClick={handleScrollToTop}>
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                        width="40"
                                        height="40" 
                                        fill="orange" 
                                        className="bi bi-arrow-up-circle-fill" 
                                        viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 
                                            0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 
                                            5.707V11.5z"/>
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Secciones</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/us">Conoceme</Link></li>
                                    <li><Link to="/contact">Contacto</Link></li>
                                    <li><Link to="/register">Registro</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fs-widget text-center">
                                <h4>Todos los Medios de Pago</h4>
                                <div className="fw-recent mx-auto d-block">
                                    <img src="https://audiovision.com.pe/wp-content/uploads/2021/03/iconostarjeta.png"
                                     alt="pagos" 
                                     className="mt-2"
                                     loading='lazy'
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
