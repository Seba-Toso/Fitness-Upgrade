import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './Css/404.css'


const NotFound = () => {
    return (
        <div >
             <section className="section-404 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-404">
                                <h1>404</h1>
                                <h3>Opps! No se pudo encontrar esa Página.</h3>
                                <p>Disculpas, pero quiza no exista, haya sido removida o cambiada.</p>
                                <img className="mt-2 rounded" src={Logo} width="300px" alt="slogan"/><br/>
                                <Link to="/"><i className="fa fa-home mt-5"></i> Ir al Home</Link>
                         </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;