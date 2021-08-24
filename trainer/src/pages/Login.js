import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withAlert } from 'react-alert';
import Iso from '../assets/Iso-NC.png';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import './Css/Contact.css';


const Login = ({alert}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const firebase = useFirebaseApp();
    


    const handleSubmit = (event) => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword( email,password )
        .then((response)=>{
            const form = document.querySelector('#form');
            form.reset()

            if(response.user.email === "admin@gmail.com") {
                alert.show('BackOffice Privado', {type: 'success'})   
                return setTimeout(() => {
                    history.push('/admin')
                },100)
            }
            if(response.user.email !== "admin@gmail.com") {
                alert.show('Login exitoso!', {type: 'success'})   
                history.push('/')
            }
            
        })
        .catch( err => {
            console.log(err);
            alert.show('Error en datos ingresados', {type: 'error'})     
        })
    }



    return (
        <div>
            <div>
            <section className="choseus-section spad back">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Login</h2>
                                <img 
                                    src={Iso} 
                                    alt="Iso" 
                                    width="100"
                                    className="mt-3 mb-3"
                                /><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="contact-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="leave-comment mt-5">
                                    <form onSubmit={handleSubmit} id="form">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="mt-2" 
                                            required
                                            autoComplete='true'
                                            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="mt-2" 
                                            required
                                            autoComplete='true'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />                                      
                                        <button className="mt-5 " type="submit">Enviar</button>
                                        <p className="mt-2">Aún no tenés cuenta? <Link to="/register">Registro</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default withAlert()(Login)
