import React from 'react';
import Logo from '../assets/Logo.png';

const AlertTemplate = ({ style, message, close }) => {
    
    //enable this to see what cames in options prop
    //console.log(options)
   
    return(
        <div className="ps-item" style={{...style, margin: '0 auto' ,width:'80%', backgroundColor: 'black', marginTop:'20%', transform: 'skewY(0)', borderRadius: '15px'}}>
            <img src={Logo} style={{width: '70%', borderRadius: '10px'}} alt='alert logo'/>
            <br/>
            <div className="pi-price" style={{transform: 'skewY(0)'}}>
            <br/>
                <h2 style={{fontSize: '2rem'}}>{message}</h2>
            </div>
        </div>
    )
  }

export default AlertTemplate;
