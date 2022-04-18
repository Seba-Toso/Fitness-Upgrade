/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Prices = () => {
    return (
        <div>
            <section className="pricing-section spad" id="prices">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*SECTION TITLE*/}
                            <div className="section-title">
                                <span>Nuestros planes</span><br /><br />
                                <p>Una vez efectuado el pago, guarda tu número de operación. Te va aparecer arriba de todo, por ejemplo “Operacion 1111111”.<br />
                                    Luego regresa a la página web e ingresa arriba a la derecha al icono de “Usuario”. De ahí apretá, "Registro".<br />
                                    De esta forma ya podes completar todos tus datos para que empecemos a trabajar juntos.<br />
                                    Cualquier consulta no dudes en mandarme un mail a <a
                                        href="mailto:nicocandiotifit@gmail.com"
                                        style={{ color: '#fafafa' }}
                                    >nicocandiotifit@gmail.com</a>
                                    <br />
                                    <br />
                                    Tambien te cuento que estoy dando entrenamientos presenciales y via Zoom. No dudes en hablarme y te paso mas info!
                                </p>
                                <br />
                                <br />
                                <h2>Elegí el plan que más se adapte a vos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/*CARD 1*/}
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>PLAN FULL<p><b>(Plan Mensual)</b><br /><small>Incluye control cada 15 dias via ZOOM</small></p></h3>}
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$5200</h3>
                                    <h2>$4490<small style={{ fontSize: 16 }}>c/u</small></h2>
                                    {/*<span>SINGLE className</span>*/}
                                </div>
                                <ul>
                                    <li>Plan Personalizado de Entrenamiento</li>
                                    <li>Actualización cada 5 semanas</li>
                                    <li>Video demostrativo para cada ejercicio</li>
                                    <li>Seguimiento 24/7 vía Mail</li>
                                    <li>Guía alimentaria</li>
                                    <li>
                                        <div>Acceso a plataforma</div>
                                        <small>*Suscripción requerida</small>
                                    </li>
                                </ul>
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848026c8c40180288b6207003d"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >ME SUMO!</a>
                            </div>
                        </div>
                        {/*CARD 2*/}
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>COACHING ONLINE<p><b>(Plan Mensual)</b></p></h3>}<br /><br />
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$4100</h3>
                                    <h2>$3450</h2>
                                    {/*<span>SINGLE className</span>*/}
                                </div>
                                <ul>
                                    <li>Plan Personalizado de Entrenamiento</li>
                                    <li>Actualización cada 5 semanas</li>
                                    <li>Video demostrativo para cada ejercicio</li>
                                    <li>Seguimiento 24/7 vía Mail</li>
                                    <li>Guía alimentaria</li>
                                    <li>
                                        <div>Acceso a plataforma</div>
                                        <small>*Suscripción requerida</small>
                                    </li>
                                </ul>
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848023eadc0180288ceca000a9"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >Empecemos!</a>
                            </div>
                        </div>
                        {/*CARD 3*/}
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>COACHING ONLINE<p><b>(Pack 2 meses)</b><br /><small>Abonando 2 meses, el segundo te queda con un 25% OFF!</small></p></h3>}
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$3450</h3>
                                    <h2>$3100<small style={{ fontSize: 16 }}>c/u</small></h2>
                                    {/*<span>SINGLE className</span>*/}
                                </div>
                                <ul>
                                    <li>Plan Personalizado de Entrenamiento</li>
                                    <li>Actualización cada 5 semanas</li>
                                    <li>Video demostrativo para cada ejercicio</li>
                                    <li>Seguimiento 24/7 vía Mail</li>
                                    <li>Guía alimentaria</li>
                                    <li>
                                        <div>Acceso a plataforma</div>
                                        <small>*Suscripción requerida</small>
                                    </li>
                                </ul>
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848023eab90180288f596e00b0"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >ACCEDÉ YA!</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prices;