/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PriceCard from './PriceCard'
import { cardInfo } from '../context/cardInfo'


const Prices = () => {

	const renderPrices = () => {
		return cardInfo.map(card => {
			return (
				<PriceCard key={card.title} card={{ ...card, old_price: false, new_price: false }} />
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
								<p>
									Luego de realizar el pago regresa a la página web e ingresa arriba a la derecha al icono de “Usuario” y seleccioná la opción "Registro".
									<br />
									De esta forma ya podes completar todos tus datos para que empecemos a trabajar juntos.
									<br />
									Cualquier consulta no dudes en mandarme un mail a 
									<a
										href="mailto:nicocandiotifit@gmail.com"
										style={{ color: '#fafafa' }}
									>
										nicocandiotifit@gmail.com
									</a>
									<br />
									<br />
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