import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../components/Auth';
import { Link, useHistory } from 'react-router-dom';
import { withAlert } from 'react-alert'
import { db, firebaseApp } from '../db/firebase';
import Iso from '../assets/Iso-NC.png';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import './Css/Contact.css';


const Register = ({alert}) => {

    const {currentUser} = useContext(AuthContext)
    const [userData, setuserData] = useState([]);
    const [isForUpdate, setIsForUpdate] = useState(false)
    const [firstName, setFirsName] = useState(!isForUpdate ? '' : userData.firstName);
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [trainingPlace, setTrainingPlace] = useState('');
    const [availableDays, setAvailableDays] = useState('');
    const [tools, setTools] = useState('');
    const [target, setTarget] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [cuponNumber, setCuponNumber] = useState('');
    const [password, setPassword] = useState('');
    const [imageFront, setImageFront] = useState('');
    const [imageBack, setImageBack] = useState('');
    const payment = cuponNumber.length > 1 ? true : false
    const firebase = useFirebaseApp();
    const history = useHistory();
    const [messageFront, setMessageFront] = useState('*Es recomendable la foto no pese más de 1MB')
    const [messageBack, setMessageBack] = useState('*Es recomendable la foto no pese más de 1MB')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { 
        if(currentUser){
        
        const currentUserData = db.collection("Suscription").where("uid", "==", currentUser.uid).onSnapshot(snap => {
            const userData = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setuserData(userData[0])
            if(userData[0] === undefined && currentUser.email !== 'admin@gmail.com') {
                alert.show("Te informamos que tu cuenta ha sido dada de baja. Registrarte nuevamente.", {type: 'error'})   
                firebase.auth().signOut() 
                currentUser.delete()
            }
            
        });
        return () => currentUserData()}
    }, [currentUser, alert, firebase]);

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((credential) => {
            createUserInDB(credential.user)
            firebase.auth().signOut() 
        })
        .catch( err => {
            console.log(err)
            setIsLoading(false)
            alert.show(`Error en los datos ingresados`, {type: 'error'})     
        })
    }

    const createUserInDB = (user) => {
        db.collection('Suscription').add({
            uid: user.uid,
            firstName,
            lastName,
            email,
            weight,
            height,
            age,
            trainingPlace,
            availableDays,
            tools,
            target, 
            medicalHistory,
            cuponNumber,
            imageFront,
            imageBack,
            payment
        }).then(()=>{
            firebase.auth().signInWithEmailAndPassword( email,password )
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
        .finally( () => {
            const form = document.querySelector('#form');
            form.reset()

            alert.show(`Exitos ${firstName}! `, {type: 'success'})  
            setIsLoading(false)
            history.push('/')
        })   
    }
    
    
    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        const updatedUser = { ...userData, payment: true, cuponNumber}
        db.collection('Suscription').doc(userData.id).set(updatedUser)
        .then(() => {
            history.push('/video')
            alert.show('Tu cuenta fue activada', {type: 'success'})     
        })
    }

    const onFileChangeFront = async (e) => {
        if(!e.target.files[0]){
            return
        }
        setMessageFront('Cargando imagen, espere...')
        const file = e.target.files[0]
        const storageRef =  firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
            .then(() => {
                fileRef.getDownloadURL().then(function(url) 
                {
                    setImageFront(url)
                    setMessageFront('Imagen cargada correctamente.')
                })
        })
    }
    const onFileChangeBack = async (e) => {
        if(!e.target.files[0]){
            return
        }
        setMessageBack('Cargando imagen, espere...')
        const file = e.target.files[0]
        const storageRef =  firebaseApp.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        .then(() => {
            fileRef.getDownloadURL().then(function(url) 
            {
                setImageBack(url)
                setMessageBack('Imagen cargada correctamente.')
            })
        })
    }


    return (
        <div className="layoutContainer">
            <section className="choseus-section spad back">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>{isForUpdate ? 'Actualización de Datos' : 'Registro'}</h2>
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
                        <div className="col-lg-8  mx-auto">
                            <div className="leave-comment mt-5">
                                {
                                currentUser && currentUser.email !== 'admin@gmail.com' &&
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={() => setIsForUpdate(!isForUpdate)} />
                                    <label className="custom-control-label text-light mr-1" for="customSwitch1">Update</label>
                                    <small style={{color:"#444"}}> - Si tenes que actualizar el número de cupón de pago, hacé click en update</small>
                                </div>
                                }
                                <br/>
                                {
                                isForUpdate ?
                                <form onSubmit={handleUpdateSubmit} id="formUpdate">
                                    <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input type="text" className="form-control"  
                                        placeholder="Ingrese N~ Cupón de Operación"
                                        pattern="^[\s\S]{10,11}$"
                                        title="Número de Operación invalido."
                                        value={cuponNumber}
                                        onChange={(e) => setCuponNumber(e.target.value)}
                                        />
                                    </div>
                                    </div>
                                    <button className="mt-5" type="submit">Actualizar pago</button>    
                                </form> 
                                :
                                <form onSubmit={handleSubmit} id="form">
                                    <p>* Todos los campos son requeridos</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                        <input type="text" className="form-control"  
                                            placeholder="Nombre" 
                                            value={firstName}
                                            onChange={(e) => setFirsName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">                            
                                        <input type="text" className="form-control"  
                                            placeholder="Apellido" 
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                        <input type="email" className="form-control"  
                                            placeholder="Email" 
                                            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">   
                                        <input type="text" className="form-control"  
                                            placeholder="Antecedentes médicos" 
                                            value={medicalHistory}
                                            onChange={(e) => setMedicalHistory(e.target.value)}
                                            />                         
                                            </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                        <input type="text" className="form-control"  
                                            placeholder="Peso" 
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                        <input type="text" className="form-control"  
                                            placeholder="Altura"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-4">                            
                                        <input type="text" className="form-control"  
                                            placeholder="Edad"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                        <input type="text" className="form-control"  
                                            placeholder="Cantidad de días para entrenar"
                                            value={availableDays}
                                            onChange={(e) => setAvailableDays(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">                            
                                        <input type="text" className="form-control"  
                                            placeholder="Lugar de entrenamiento"
                                            value={trainingPlace}
                                            onChange={(e) => setTrainingPlace(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">                            
                                        <textarea type="text" className="form-control"  
                                            placeholder="Si es en casa, disponés de elementos? Detallarlos:"
                                            value={tools}
                                            onChange={(e) => setTools(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                        <textarea type="text" className="form-control"  
                                            placeholder="Objetivo"
                                            value={target}
                                            onChange={(e) => setTarget(e.target.value)}
                                            /> 
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                        <p>Foto de Frente</p>    
                                        <small className="form-group col-md-6" style={{color:"#444"}}>{messageFront}</small>                          
                                        <input 
                                            type="file"
                                            className="p-2"  
                                            accept="image/*"
                                            onChange={onFileChangeFront}
                                        />
                                        
                                        </div>
                                        <div className="form-group col-md-6">                            
                                        <p>Foto de Espalda</p>           
                                        <small className="form-group col-md-6" style={{color:"#444"}}>{messageBack}</small>                     
                                        <input 
                                            type="file"
                                            className="p-2"       
                                            accept="image/*"                    
                                            onChange={onFileChangeBack}
                                            disabled={imageFront? false : true}
                                        />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                        <small className="form-group col-md-6" style={{color:"#444"}}>El Nro de cupón debe tener entre 10 y 11 caracteres.</small>
                                        <input type="text" className="form-control"  
                                            placeholder="Ingrese N~ Cupón de Operación" 
                                            required
                                            pattern="^[\s\S]{10,12}$"
                                            title="Número de Operación invalido."
                                            value={cuponNumber}
                                            onChange={(e) => setCuponNumber(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <small className="form-group col-md-6" style={{color:"#444"}}>La contraseña debe tener mínimo 6 caracteres.</small>   
                                            <input type="password" className="form-control"  
                                                placeholder="Elija su Contraseña" 
                                                value={password}
                                                minLength={6}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button 
                                        className="mt-5 createAccount" 
                                        type="submit"
                                        disabled={imageFront && imageBack && email && password && !isLoading ? false : true}
                                    >
                                        {
                                            !isLoading ? 'Crear cuenta' : 'Creando cuenta, por favor espere.'
                                        }
                                    </button>
                                    <p className="mt-2">Ud. ya tenés cuenta? <Link to="/login">Login</Link></p>    
                                </form> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withAlert()(Register);