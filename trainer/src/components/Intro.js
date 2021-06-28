import React from 'react';
import {GiMuscleUp} from 'react-icons/gi'

const Intro = () => {
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
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span ><GiMuscleUp fontSize={50} /></span>
                                <h4>CAMBIOS REALES</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice"></span>
                                <h4>VIDA SALUDABLE</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell"></span>
                                <h4>REFORZA TU CONFIANZA</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat"></span>
                                <h4>100 % ADAPTABLE A TU VIDA</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Intro;