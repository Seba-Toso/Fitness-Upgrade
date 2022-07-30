import React from 'react';
import video from '../assets/Nico.mp4';

const Us = () => {
    return (
        <div>
            <section className="aboutus-section">
                <div className="container-fluid">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="about-video set-bg" style={{ background: 'black' }} data-setbg="img/about-us.jpg">
                                <video className="about-video set-bg w-100" data-setbg="img/about-us.jpg" controls>
                                    <source src={video} />
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 mb-3">
                            <div className="about-text">
                                <div className="section-title">
                                    <h2>Me presento:</h2>
                                </div>
                                <div className="at-desc text-justify">
                                    <p>Mi nombre es Nicolas Candioti, soy Personal Trainer Certificado y estoy en el mundo del Fitness hace ya
                                        más de 5 años. A lo largo de este tiempo me concentré en buscar métodos de entrenamientos que no solo den
                                        resultados, sino que se adapten un 100% a la vida de cada uno.<br />
                                        Mi objetivo con cada uno de mis clientes es que su Plan de Entrenamiento se amolde a su vida diaria.<br />
                                        Voy a acompañarte día a día en tu entrenamiento y te voy a ir explicando todo lo que necesitas saber para
                                        entrenar de forma prolija y segura.<br /><br />
                                        LLEGA A TUS OBJETIVOS SIN PERDER TIEMPO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Us;

