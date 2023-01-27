import React from 'react'

const PaymentDetail = ({ card = null, country = '' }) => {

  if (country !== 'Argentina' && !card?.payment_link_uss) {
    return (
      <div className={`row non-visible justify-content-center ${!country ? '' : 'fadeIn'}`}>
        <div className="section-title">
          <span style={{ color: '#fafafa', fontSize: '18px', fontWeight: 'normal' }}>Este plan no está disponible para tu ubicación</span>
        </div>
        <div style={{ fontSize: '14px', color: '#fafafa', fontWeight: 'normal', textTransform: 'initial'}}>
          Si queres entrenar con mi seguimiento te sugiero que mires mis otros planes
        </div>
        <div>
        <a
              href='priceCheckout?name=vip'
              className="primary-btn pricing-btn m-3"
              target="_top"
              rel="noreferrer"
            >
              PLAN VIP
            </a>
            <a
              href='priceCheckout?name=full'
              className="primary-btn pricing-btn m-3"
              target="_top"
              rel="noreferrer"
            >
              PLAN FULL
            </a>
        </div>
      </div>
    )
  }

  return (
    <div className={`row non-visible justify-content-center ${!country ? '' : 'fadeIn'}`}>
      <div className="section-title">
        <span style={{ color: '#fafafa', fontSize: '18px', fontWeight: 'normal', textTransform: 'initial' }}>El valor del mismo es de</span>
        {
          card?.title === 'PLAN VIP' || card?.title === 'PLAN FULL' ?
            <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
              {
                (card?.old_price || card?.old_price_uss) &&
                <h2 style={{ textDecoration: 'line-through', transform: 'skewY(0)', color: '#444', fontSize: '28px', marginRight: '20px' }}>
                  USD ${card?.old_price_uss}
                </h2>
              }
              {
                (card?.new_price || card?.new_price_uss) &&
                <h2 style={{ fontSize: '48px  ' }}>
                  USD ${card?.new_price_uss}
                  <small style={{ fontSize: 16 }}>
                    {card?.price_group && 'c/u'}
                  </small>
                </h2>
              }
            </div>
          :
          <div className="pi-price" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            {
              country === 'Argentina' && card?.old_price && 
              <h2 style={{ textDecoration: 'line-through', transform: 'skewY(0)', color: '#444', fontSize: '28px', marginRight: '20px' }}>
                ${card?.old_price}
              </h2>
            }
            {
              country !== 'Argentina' && card?.old_price_uss &&
              <h2 style={{ textDecoration: 'line-through', transform: 'skewY(0)', color: '#444', fontSize: '28px', marginRight: '20px' }}>
                USD ${card?.old_price_uss}
              </h2>
            }
            {
              (card?.new_price || card?.new_price_uss) &&
              <h2 style={{ fontSize: '48px' }}>
                {country === 'Argentina' ? '$'+card?.new_price : 'USD $'+card?.new_price_uss}
                <small style={{ fontSize: 16 }}>
                  {card?.price_group && 'c/u'}
                </small>
              </h2>
            }
          </div>
        }

        <span style={{ color: '#fafafa', fontSize: '16px', fontWeight: 'normal', textTransform: 'initial' }}>mensuales</span>
        <div style={{ fontSize: '14px', color: '#fafafa', fontWeight: 'normal', textTransform: 'initial', margin: '48px 10px' }}>
          {
            (card?.title === 'PLAN VIP' || card?.title === 'PLAN FULL') && country === 'Argentina' ?
            'El valor figura en dólares. De todas formas, se abona en pesos argentinos vía Mercado Pago. El precio se actualiza mes a mes dependiendo el valor del dólar oficial'
            :
            'Luego de suscribirte regístrate en la página de inicio así empezamos a trabajar juntos.'
          }
          <br />
        </div>
        {
          country === 'Argentina' ?
            <a
              href={card?.payment_link}
              className="payment-checkout-mp"
              target="_blank"
              rel="noreferrer"
            >
              {card?.button}
            </a>
            :
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={card?.payment_link_uss} />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
            </form>
        }
      </div>
    </div>
  )
}

export default PaymentDetail