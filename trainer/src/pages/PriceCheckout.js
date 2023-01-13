import React, { useState } from "react";
import {
  useLocation
} from "react-router-dom";
import { withAlert } from 'react-alert'
import { countries } from '../context/countries'
import { cardInfo } from '../context/cardInfo'
import PriceCard from "../components/PriceCard";
import PaymentDetail from '../components/PaymentDetail'

import './Css/PriceCheckout.css'

const PriceCheckout = ({alert}) => {
  const [country, setCountry] = useState(null)

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();

  const selectedPlan = () => {
    const planName = query.get('name')
    switch (planName) {
      case 'vip':
        return 'PLAN VIP'
      case 'full':
        return 'PLAN FULL'
      case 'coaching':
        return 'COACHING ONLINE'
      default:
        return 'NO SE HA SELECCIONADO UN PLAN'
    }
  }
  const card = cardInfo.filter(plan => plan.title === selectedPlan())[0]

  const countryReturn = countries.map((country) => <option key={country} value={country}>{country}</option>)

  const handleChange = (e) => {
    setCountry(e.target.value)
    localStorage.setItem('country', e.target.value)
  }

  const handleAlert = () => {
    const message = <>
      Bienvenido!
      <br/>
      Recibí tu suscripción de forma correcta   
      <br/>
      Una vez que te registres en la página con todos tus datos ya vas a quedar agendando para que empiece a armar tu plan de entrenamiento personalizado   
      <br/>
      El mismo te va a estar llegando en los 2-3 días hábiles
      <br/>
      Recorda utilizar el código que figura en la suscripción de Mercado Pago
      <br/>
      Código: 53200155880
      <br/>
      <br/>
      https://www.nicocandiotifit.com/register
      <br/>
      IMPORTANTE: recordá que estás adherido a un débito automático. Esto quiere que los 01 de cada mes se te va a cobrar. En caso de que en algún momento no desees continuar con el asesoramiento, me avisas y efectuamos la baja en el momento, ya que una vez Cobrado te agendo para seguir
      <br/>
      Cualquier duda que tengas, estoy a tú disposición  
      <br/>
      A partir de ahora vas a empezar a entrenar de forma correcta con el mejor asesoramiento  
      <br/>
      Saludos! 
    </>
    alert.show(message, {type: 'withClose', timeout: 0, }) 
  }

  return (
    <div className="layoutContainer paymentCheckout">
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Elegiste el</span>
                <h2>{selectedPlan()}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-around mobile-col-invert m-2">
            <div className="col-lg-4">
              <div className="section-title">

                <PriceCard card={{...card, title: 'Te incluye', button: false, old_price: false, new_price: false}} containerClassName={"col"} />

              </div>
            </div>
            <div className="col-lg-6 justify-content-center">
              <div className="section-title">
                {
                  //!country &&
                  <select className={`custom-select ${!country ? '' : 'fadeOff'}`} id="inputGroupSelect01" onChange={(e) => { handleChange(e) }}>
                    <option defaultValue>Elegí tu país</option>
                    {
                      countryReturn
                    }
                  </select>
                }
                {
                  country &&
                  <PaymentDetail card={{...card, button: 'Pagar con Mercado Pago'}} country={country} handleAlert={handleAlert}/>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAlert()(PriceCheckout);