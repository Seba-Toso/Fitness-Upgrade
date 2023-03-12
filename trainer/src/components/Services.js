import React from 'react';

import service1 from '../assets/Fullbody.png';
import service2 from '../assets/Hit.png';
import service3 from '../assets/TipsNutricionales.png';
import service4 from '../assets/Bíceps.jpg';


const Services = () => {

    //Información de servicios dados
    const servicesList = [
        {
            title: 'Plan de entrenamiento personalizado',
            subtitle: 'Te pido tus datos y hacemos un plan totalmente personalizado que se adapte a tu forma de vida con atencion 24/7',
            pd:'',
            image: service2
        },
        {
            title: 'Guía de entrenamiento',
            subtitle: 'Pedi mi plan general en base a tus objtivos',
            pd: '(Aumento de masa muscular / Reduccion de grasa corporal / Resistencia)',
            image: service1
        },
        {
            title: 'Plan de comidas',
            subtitle: 'Armamos tu plan personalizado de comidas, ya sea que comas vegetariano, vegano, sin tacc, entre otros',
            pd: '(Atencion: no son planes nutricionales)',
            image: service3
        },
        {
            title: 'Videos demostrativos',
            subtitle: 'Todos los ejercicios y sus variaciones con sus repectivos videos en gimnasio o casa. Vas a poder acceder desde tu celular o computadora',
            pd: '',
            image: service4
        },
    ]

    const serviceRenderer = () => {
        return servicesList.map( (service,index) => {
            return (
                <div className="col-lg-3 col-md-6" key={service.title+'-'+index}>
                    <div className="class-item">
                    <picture>
                        <source srcSet={service.image} type="image/svg+xml"/>
                        <img src={service.image} className="img-fluid" alt="services" loading='lazy' />
                    </picture>
                        <div className="text-center ci-text">
                            <span>{service.title}</span>
                            <p className="text-justify m-3">
                                {service.subtitle}
                                {
                                    service.pd && 
                                    <>
                                    <br/>
                                    {service.pd}
                                    </>    
                                }
                            </p>
                            <br/>
                            <br/>
                            <a href="#prices"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            )
        })
    }

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
                        {serviceRenderer()}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Services;