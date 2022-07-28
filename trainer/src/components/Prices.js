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
                                {<h3>PLAN VIP<p><b>(Plan Mensual)</b><br /><small>Incluye control cada 15 dias via ZOOM</small></p></h3>}<br />
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$9500</h3>
                                    <h2>$8100<small style={{ fontSize: 16 }}>c/u</small></h2>
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
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848243b8d701824573573400db"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >ME SUMO!</a>
                            </div>
                        </div>
                        {/*CARD 2*/}
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>PLAN FULL<p><b>(Plan Mensual)</b><br /><small>Incluye 1 sesion via zoom por mes</small></p></h3>}<br />
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$7000</h3>
                                    <h2>$6100<small style={{ fontSize: 16 }}></small></h2>
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
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084823ab6e701824574a3f803fd"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >ME SUMO!</a>
                            </div>
                        </div>
                        {/*CARD 3*/}
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>COACHING ONLINE<p><b>(Plan Mensual)</b></p></h3>}<br /><br />
                                <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>$4900</h3>
                                    <h2>$4200</h2>
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
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848244949c01824577533b00af"
                                    className="primary-btn pricing-btn"
                                    target="_blank" rel="noreferrer"
                                >Empecemos!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prices;