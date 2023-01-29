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
                <PriceCard card={{...card, title: 'Te incluye', button: false, old_price: false, new_price: false}} containerClassName={"col checkoutCard"} />
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
                  <PaymentDetail card={{...card, button: 'Empecemos!'}} country={country}/>
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