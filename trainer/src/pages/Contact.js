import React, { useState } from 'react';
import Iso from '../assets/Iso-NC.png';
import { withAlert } from 'react-alert';
import { db } from '../db/firebase';
import './Css/Contact.css';


const Contact = ({alert}) => {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [email, setEmail] = useState('');
   const [comment, setComment] = useState('');

   const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('Comment').add({
            name,
            surname,
            email,
            comment
        }).then(() => {
            const form = document.querySelector('#form');
            form.reset()
            alert.show(`Gracias ${name}!. Me voy a estar comunicando a la brevedad`, {type: 'success'})  
        }).catch( err => {
            alert.show('Error en datos ingresados', {type: 'error'})     
        })   
   }

    

    return (
        <div>
            <section className="choseus-section spad back">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 id='contactTitle mt-2'>Contacto</h2>
                                <img 
                                    src={Iso} 
                                    alt="Iso" 
                                    width="100"
                                    className="mt-3"
                                    id='contactLogo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <section className="contact-section spad">
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-8 mx-auto">
                            <div className="leave-comment">
                                <form onSubmit={handleSubmit} id="form">
                                    <input 
                                        type="text" 
                                        placeholder="Nombre"
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                    <input 
                                        type="phone"
                                        placeholder="Apellido"
                                        onChange={(e) => setSurname(e.target.value)}
                                        />
                                    <input 
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                    <textarea 
                                        placeholder="Mensaje"
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                    <button 
                                        type="submit"
                                        >Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withAlert()(Contact);