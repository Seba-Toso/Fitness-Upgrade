import React from 'react';

import service1 from '../assets/Fullbody.png';
import service2 from '../assets/Hit.png';
import service3 from '../assets/TipsNutricionales.png';
import service4 from '../assets/EntrenaDesdeCasa.png';


const Services = () => {
    return (
        <div>
            <section className="classes-section spad" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nuestros Servicios</span>
                                <h2>Qué ofrecemos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       
                        <div className="col-lg-3 col-md-6">
                            <div className="class-item">
                            ​<picture>
                            <source srcset={service2} type="image/svg+xml"/>
                              <img src={service2} class="img-fluid" alt="services"/>
                            </picture>
                                <div className="text-center ci-text">
                                    <span>Plan de entrenamiento personalizado</span>
                                    <p className="text-justify m-3">Te pido tus datos y hacemos un plan totalmente personalizado que se adapte a tu forma de vida con atencion 24/7</p>
                                    <br/>
                                    <br/>
                                    <a href="#prices"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="class-item">
                            ​<picture>
                            <source srcset={service1} type="image/svg+xml"/>
                              <img src={service1} class="img-fluid" alt="services"/>
                            </picture>
                                <div className="text-center ci-text">
                                    <span>Guía de entrenamiento</span>
                                    <p className="text-justify m-3">Pedi mi plan general en base a tus objtivos <br/>(Aumento de masa muscular / Reduccion de grasa corporal / Resistencia)</p>
                                    <br/>
                                    <br/>
                                    <a href="#prices"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="class-item">
                            ​<picture>
                            <source srcset={service3} type="image/svg+xml"/>
                              <img src={service3} class="img-fluid" alt="services"/>
                            </picture>
                                <div className="text-center ci-text">
                                    <span>Tips nutricionales</span>
                                    <p className="text-justify m-3">
                                        Te aconsejo como dividir tus comidas para poder acompañar tu plan personalizado <br/>(Atencion: no son planes nutricionales)
                                    </p>
                                    <br/>
                                    <br/>
                                    <a href="#prices"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="class-item">
                            ​<picture>
                            <source srcset={service4} type="image/svg+xml"/>
                              <img src={service4} class="img-fluid" alt="services"/>
                            </picture>
                                <div className="text-center ci-text">
                                    <span>Videos demostrativos</span>
                                    <p className="text-justify m-3">Todos los ejercicios y sus variaciones con sus repectivos videos en gimnasio o casa.
                                                                    Vas a poder acceder desde tu celular o computadora</p>
                                    <br/>
                                    <br/>
                                    <a href="#prices"><i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Services;