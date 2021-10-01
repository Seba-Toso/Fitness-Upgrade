/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Prices = () => {
    return (
        <div>
             <section className="pricing-section spad" id="prices">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nuestros planes</span><br/><br/>
                                <p>Una vez efectuado el pago, guarda tu número de operación. Te va aparecer arriba de todo, por ejemplo “Operacion 1111111”.<br/> 
                                    Luego regresa a la página web e ingresa arriba a la derecha al icono de “Usuario”. De ahí apretá, "Registro".<br/>
                                    De esta forma ya podes completar todos tus datos para que empecemos a trabajar juntos.<br/>
                                    Cualquier consulta no dudes en mandarme un mail a <a 
                                    href="mailto:nicocandiotifit@gmail.com"
                                    style={{color: '#fafafa'}}
                                    >nicocandiotifit@gmail.com</a>
                                <br/>
                                <br/>
                                Tambien te cuento que estoy dando entrenamientos presenciales y via Zoom. No dudes en hablarme y te paso mas info!    
                                </p>
                                <br/>
                                <br/>
                                <h2>Elegí el plan que más se adapte a vos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>COACHING ONLINE<p><b>(Plan Mensual)</b></p></h3>}<br/><br/>
                                <div className="pi-price" style={{display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                    <h3 style={{textDecoration: 'line-through', transform: 'skewY(0)'}}>$3300</h3>
                                    <h2>$2750</h2>
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
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808479cfe0100179f6c78b541f18" 
                                   className="primary-btn pricing-btn"
                                   target="_blank" rel="noreferrer"
                                   >Empecemos!</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>COACHING ONLINE<p><b>(pack 3 meses)</b><br/><small>Congela tu precio por 3 meses. Podes elegir abonar en cuotas</small></p></h3>}
                                <div className="pi-price" style={{display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                    <h3 style={{textDecoration: 'line-through', transform: 'skewY(0)'}}>$2750</h3>
                                    <h2>$2400<small style={{fontSize: 16}}>c/u</small></h2>
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
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847c02d739017c28f14abc2063" 
                                   className="primary-btn pricing-btn"
                                   target="_blank" rel="noreferrer"
                                >ACCEDÉ YA!</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                {<h3>PLAN DE ENTRENAMIENTO<p><b>(4-5 semanas)</b></p></h3>}<br/><br/>
                                <div className="pi-price" style={{display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
                                    <h3 style={{textDecoration: 'line-through', transform: 'skewY(0)'}}>$1700</h3>
                                    <h2>$1250</h2>
                                    {/*<span>SINGLE className</span>*/}
                                </div>
                                <ul>
                                    <li>Entrenamiento basado en tu objetivo</li>
                                    <li>Video demostrativo para cada ejercicio</li>
                                    <li>Rutina en gimnasio o casa</li>
                                    <li>Fuerza / Abdominales / Cardio (HIIT)</li>
                                    <li>Acceso a plataforma</li>
                                    <li>
                                        <div>No incluye asesoramiento</div>
                                        <small>*Suscripción requerida</small>
                                    </li>
                                </ul>
                                <a href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380847c02d795017c28ed91241f9f" 
                                   className="primary-btn pricing-btn"
                                   target="_blank" rel="noreferrer"
                                   >QUIERO MI PLAN!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prices;