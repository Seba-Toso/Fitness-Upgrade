import React from 'react';
import Us from '../components/Us';
import './Css/About.css';


const About = () => {
    return (
        <div className="layoutContainer">
            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nicolás Candioti</span>
                                <h2>Personal Trainer Certificado</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Us />
        </div>
    );
}

export default About;