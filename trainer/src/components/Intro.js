import React from 'react';
import {GiMuscleUp} from 'react-icons/gi'

const Intro = () => {

    const benefits = [
        {
            title: 'CAMBIOS REALES',
            iconInClass: false,
            image: <GiMuscleUp fontSize={50} />
        },
        {
            title: 'VIDA SALUDABLE',
            iconInClass: true,
            image: 'flaticon-033-juice'
        },
        {
            title: 'REFORZA TU CONFIANZA',
            iconInClass: true,
            image: 'flaticon-002-dumbell'
        },
        {
            title: '100 % ADAPTABLE A TU VIDA',
            iconInClass: true,
            image: 'flaticon-014-heart-beat'
        }
    ]

    

    const benefitRenderer = () => {
        return benefits.map( benefit => {
            return (
                <div className="col-lg-3 col-sm-6" key={benefit.title}>
                    <div className="cs-item">
                        <span className={benefit.iconInClass ? benefit.image : 'undefined' }>
                            {!benefit.iconInClass && benefit.image}
                        </span>
                        <h4>{benefit.title}</h4>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Por qué elegir Fitness Upgrade?</span>
                                <h2>Te ayudamos a ir más allá de tus límites</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {benefitRenderer()}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro;