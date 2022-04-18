import React from 'react';
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'
import Card4 from '../assets/Card4.png'
import Card5 from '../assets/Card5.PNG'
import Card6 from '../assets/Card6.PNG'
import Card7 from '../assets/Card7.PNG'
import Card8 from '../assets/Card8.PNG'
import './Css/Cards.css';



const Cards = () => {
    return (
        <div className="contact-section spad">
            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Antes y Después</span>
                                <h2>Ellos ya fueron por su cambio:</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <div className="container">
                <div className="row align-items-start mt-3 ">
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card1}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card2}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card3}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card4}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card5}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card6}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card7}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="imgChanges"
                            src={Card8}
                            alt="after"
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cards;