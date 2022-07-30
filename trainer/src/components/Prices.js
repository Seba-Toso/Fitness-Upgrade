/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Prices = () => {

    const cardInfo = [
        {
            title: 'PLAN VIP',
            title_help: '(Plan Mensual)',
            subtitle: 'Incluye control cada 15 dias via ZOOM',
            old_price: 9500,
            new_price: 8100,
            price_group: false,
            items: [
                'Plan Personalizado de Entrenamiento',
                'Actualización cada 5 semanas',
                'Video demostrativo para cada ejercicio',
                'Seguimiento 24/7 vía Mail',
                'Guía alimentaria',
                'Acceso a plataforma',
                '*Suscripción requerida',
            ],
            button: 'ME SUMO!',
            button_link: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848243b8d701824573573400db'
        },
        {
            title: 'PLAN FULL',
            title_help: '(Plan Mensual)',
            subtitle: 'Incluye 1 sesion via zoom por mes',
            old_price: 7000,
            new_price: 6100,
            price_group: false,
            items: [
                'Plan Personalizado de Entrenamiento',
                'Actualización cada 5 semanas',
                'Video demostrativo para cada ejercicio',
                'Seguimiento 24/7 vía Mail',
                'Guía alimentaria',
                'Acceso a plataforma',
                '*Suscripción requerida',
            ],
            button: 'ME SUMO!',
            button_link: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084823ab6e701824574a3f803fd'
        },
        {
            title: 'COACHING ONLINE',
            title_help: '(Plan Mensual)',
            subtitle: '',
            old_price: 4900,
            new_price: 4200,
            price_group: false,
            items: [
                'Plan Personalizado de Entrenamiento',
                'Actualización cada 5 semanas',
                'Video demostrativo para cada ejercicio',
                'Seguimiento 24/7 vía Mail',
                'Guía alimentaria',
                'Acceso a plataforma',
                '*Suscripción requerida',
            ],
            button: 'Empecemos!',
            button_link: 'https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848244949c01824577533b00af'
        }
    ]

    const renderPrices = () => {
        return cardInfo.map(card => {
            return (
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        {
                            <h3>
                                {card?.title}
                                <p>
                                    <b>
                                        {card?.title_help || <br />}
                                    </b>
                                    <br />
                                    <small>
                                        {card?.subtitle || <br />}
                                    </small>
                                </p>
                            </h3>
                        }
                        <br />
                        <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <h3 style={{ textDecoration: 'line-through', transform: 'skewY(0)' }}>
                                ${card?.old_price}
                            </h3>
                            <h2>
                                ${card?.new_price}
                                <small style={{ fontSize: 16 }}>
                                    {card?.price_group && 'c/u'}
                                </small>
                            </h2>
                        </div>
                        <ul>
                            {
                                card?.items.map((item, index) => {
                                    if (index === (card.items.length - 1)) {
                                        return <li><small>{item}</small></li>
                                    }
                                    return <li>{item}</li>
                                })
                            }
                        </ul>
                        <a
                            href={card?.button_link}
                            className="primary-btn pricing-btn"
                            target="_blank" rel="noreferrer"
                        >
                            {card?.button}
                        </a>
                    </div>
                </div>
            )
        })
    }

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
                        {
                            renderPrices()
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Prices;