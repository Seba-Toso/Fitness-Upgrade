import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withAlert } from 'react-alert'
import { db, firebaseApp } from '../db/firebase';
import Iso from '../assets/Iso-NC.png';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import './Css/Contact.css';


const Register = ({ alert }) => {

	const [firstName, setFirsName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [age, setAge] = useState('');
	const [trainingPlace, setTrainingPlace] = useState('');
	const [availableDays, setAvailableDays] = useState('');
	const [tools, setTools] = useState('');
	const [foodType, setFoodType] = useState('')
	const [target, setTarget] = useState('');
	const [medicalHistory, setMedicalHistory] = useState('');
	const [password, setPassword] = useState('');
	const [acceptTerms, setAcceptTerms] = useState(false)
	const [imageFront, setImageFront] = useState('');
	const [imageBack, setImageBack] = useState('');
	const payment = false
	const firebase = useFirebaseApp();
	const history = useHistory();
	const [messageFront, setMessageFront] = useState('*Es recomendable la foto no pese más de 1MB')
	const [messageBack, setMessageBack] = useState('*Es recomendable la foto no pese más de 1MB')
	const [isLoading, setIsLoading] = useState(false)


	const handleSubmit = (event) => {
		event.preventDefault()
		setIsLoading(true)

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((credential) => {
				createUserInDB(credential.user)
				firebase.auth().signOut()
			})
			.catch(err => {
				console.log(err)
				setIsLoading(false)
				alert.show(`Error en los datos ingresados`, { type: 'error' })
			})
	}

	const createUserInDB = (user) => {
		const localStorageCountry = localStorage.getItem('country') ?? ''
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
			foodType,
			target,
			medicalHistory,
			//cuponNumber,
			imageFront,
			imageBack,
			payment,
			acceptTerms,
			county: localStorageCountry ?? ''
		}).then(() => {
			firebase.auth().signInWithEmailAndPassword(email, password)
		}).catch((err) => {
			console.log(err)
			setIsLoading(false)
		})
			.finally(() => {
				const form = document.querySelector('#form');
				form.reset()

				alert.show(`Exitos ${firstName}! `, { type: 'success' })
				setIsLoading(false)
				history.push('/')
			})
	}

	const onFileChangeFront = async (e) => {
		if (!e.target.files[0]) {
			return
		}
		setMessageFront('Cargando imagen, espere...')
		const file = e.target.files[0]
		const storageRef = firebaseApp.storage().ref()
		const fileRef = storageRef.child(file.name)
		await fileRef.put(file)
			.then(() => {
				fileRef.getDownloadURL().then(function (url) {
					setImageFront(url)
					setMessageFront('Imagen cargada correctamente.')
				})
			})
			.catch(err => console.log(err))
	}

	const onFileChangeBack = async (e) => {
		if (!e.target.files[0]) {
			return
		}
		setMessageBack('Cargando imagen, espere...')
		const file = e.target.files[0]
		const storageRef = firebaseApp.storage().ref()
		const fileRef = storageRef.child(file.name)
		await fileRef.put(file)
			.then(() => {
				fileRef.getDownloadURL().then(function (url) {
					setImageBack(url)
					setMessageBack('Imagen cargada correctamente.')
				})
			})
			.catch(err => console.log(err))
	}


	return (
		<div className="layoutContainer">
			<section className="choseus-section spad back">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title">
								<h2>Registro</h2>
								<img
									src={Iso}
									alt="Iso"
									width="100"
									className="mt-3 mb-3"
								/><br />
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
								<br />
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
										<div className="form-group col-md-4">
											<textarea type="text" className="form-control"
												placeholder="Si es en casa, disponés de elementos? Detallarlos:"
												value={tools}
												onChange={(e) => setTools(e.target.value)}
											/>
										</div>
										<div className="form-group col-md-4">
											<textarea type="text" className="form-control"
												placeholder="Tipo de alimentación (vegana, vegetariana, sin gluten, otros.)"
												value={foodType}
												onChange={(e) => setFoodType(e.target.value)}
											/>
										</div>
										<div className="form-group col-md-4">
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
											<small className="form-group col-md-6" style={{ color: "#444" }}>{messageFront}</small>
											<input
												type="file"
												className="p-2"
												accept="image/*"
												onChange={onFileChangeFront}
											/>
										</div>
										<div className="form-group col-md-6">
											<p>Foto de Espalda</p>
											<small className="form-group col-md-6" style={{ color: "#444" }}>{messageBack}</small>
											<input
												type="file"
												className="p-2"
												accept="image/*"
												onChange={onFileChangeBack}
												disabled={imageFront ? false : true}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col-md-6">
											<small className="form-group col-md-6" style={{ color: "#444" }}>La contraseña debe tener mínimo 6 caracteres.</small>
											<input type="password" className="form-control"
												placeholder="Elija su Contraseña"
												value={password}
												minLength={6}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-row">
										<div className="form-group col d-flex align-items-center">
											<label className='mr-3 mb-0' >He leído, entendido y aceptado la 
												<a className='terms&conditions' href='/politics-and-legal#privacidad'> Política de Privacidad </a>
												y el 
												<a className='terms&conditions' href='/politics-and-legal#legal'> Aviso legal</a>
											</label>
											<input 
												className='m-0 '
												type="checkbox"
												checked={acceptTerms}
												onChange={(e) => setAcceptTerms(e.target.checked)}
												required
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
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default withAlert()(Register);