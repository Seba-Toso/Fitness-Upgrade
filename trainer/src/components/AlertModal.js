import React from 'react';
import Logo from '../assets/Logo.png';

import './Css/Alert.css'

const AlertTemplate = ({ style, options, message, close }) => {

	//enable this to see what cames in options prop
	//console.log(options)


	return (
		<div className="ps-item alert" style={{ ...style}}>
			<img src={Logo} style={{ width: '70%', borderRadius: '10px' }} alt='alert logo' />
			<br />
			<div className="pi-price" style={{ transform: 'skewY(0)' }}>
				<br />
				<h2 style={{ fontSize: '1rem', color: '#fafafa' }}>{message}</h2>
			</div>
			{
				options?.type === 'withClose' &&
				<button className='myButton' onClick={close}>
					Cerrar
				</button>
			}
		</div>
	)
}

export default AlertTemplate;
