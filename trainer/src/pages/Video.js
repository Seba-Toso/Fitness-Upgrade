/* eslint-disable no-lone-blocks */
import React, { useState, useEffect, useContext } from 'react';
import { db } from '../db/firebase';
import { connect } from 'react-redux'
import { MdHighlightOff } from 'react-icons/md'
import { AuthContext } from '../components/Auth';
import CollapsableItem from '../components/CollapsableItem';
import './Css/Videos.css';



const Video = ({ videos, fetching }) => {

	const [userData, setuserData] = useState([]);
	const { currentUser } = useContext(AuthContext)
	const [inputFilter, setinputFilter] = useState('')
	const [showSuggest, setShowSuggest] = useState(false)

	useEffect(() => {
		const currentUserData = db.collection("Suscription").where("uid", "==", currentUser.uid).onSnapshot(snap => {
			const fetchedUserData = snap.docs.map(doc => {
				return (
					{ ...doc.data(), 'id': doc.id }
				)
			}
			)
			setuserData(fetchedUserData)
		});

		return () => currentUserData()
	}, [currentUser.uid]);

	let excerciseNames = []
	let currentVideos = !inputFilter ? videos : videos.map(video => {
		let newExercises = video.exercises.map(excercise => {
			if (excercise.name.toLowerCase().includes(inputFilter.toLowerCase())) {
				excerciseNames = [...excerciseNames, excercise.name]
				return excercise
			} else {
				return false
			}
		}).filter(excercise => excercise)
		return { ...video, exercises: newExercises }
	}).filter(category => category.exercises.length)

	const handleInput = (e) => {
		if (typeof e === 'string') {
			setShowSuggest(false)
			return setinputFilter(e)
		}
		e.preventDefault()
		setShowSuggest(true)
		setinputFilter(e.target.value)
	}

	const handleReset = () => { setinputFilter('') }

	console.log(videos);

	return (
		<div className="layoutContainer">
			<section className="classes-section spad videos-container">
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-12">
							<div className="section-title">
								<span>Nuestros Ejercicios</span>
								<h2>Videos Explicativos</h2>
								{
									(!userData[0]?.payment && currentUser.email !== 'admin@gmail.com') ||
									<div className='videoFilterContainer'>
										<span style={{ paddingBottom: '5px', borderBottom: '1px solid #F36100', margin: '0 auto' }}>
											<input
												type="text"
												className='videoSearchInput'
												onChange={(e) => handleInput(e)}
												placeholder="Busca un video"
												style={{
													width: '250px',
													marginTop: '9px',
													backgroundColor: 'transparent',
													outline: 'none',
													border: 'none',
													borderRadius: '0',
													color: 'white',
													boxShadow: 'none'
												}}
												value={inputFilter}
											/>
											{
												inputFilter.length > 0 &&
												<MdHighlightOff
													onClick={handleReset}
													style={{
														cursor: 'pointer',
													}}
												/>
											}
										</span>
										{
											showSuggest &&
											<ul className='inputSuggest'>
												{excerciseNames?.map(name => { return <li key={name} className='suggest' onClick={() => handleInput(name)}>{name}</li> })}
											</ul>
										}
									</div>
								}
							</div>
						</div>
					</div>
					{
						currentVideos.length === 0 ?
							<div className="row">
								<div style={{ alignContent: 'center', color: '#fafafa', width: '100%', height: '50vh' }}>
									<h2 className='text-center' style={{ color: '#fafafa' }}>{inputFilter.length > 0 ? 'No se encontró el ejercicio' : 'Estamos trabajando en esto'}</h2>
									<br />
									<br />
									<h5 className='text-center' style={{ color: '#fafafa' }}>
										{inputFilter.length > 0 ? '' : 'Actualmente no hay videos cargados.'}
									</h5>
									<br />
									<p className='text-center'>
										{inputFilter.length > 0 ? 'Asegurate de que el ejercicio esté bien escrito o que el nombre sea el correcto.' : `Todavía no hemos cargado videos de entrenamientos o hubo algún inconveniente al momento de cargarlos. Para tener más detalles no dudes
																	en ponerte en contacto.`}
									</p>
								</div>
							</div>
							:
							<div className="row">
								{
									fetching ?
										<h2>Cargando ...</h2>
										:
										!userData[0]?.payment && currentUser.email !== 'admin@gmail.com' ?
											<div style={{ alignContent: 'center', color: '#fafafa', width: '100%', height: '50vh' }}>
												<h2 className='text-center' style={{ color: '#fafafa' }}>No estás habilitado para ver los videos</h2>
												<br />
												<br />
												<h5 className='text-center' style={{ color: '#fafafa' }}>
													Esto puede suceder debido a que todavía no te he habilitado para verlos o que el abono mensual no se fue realizado o fue hecho fuera de término.
												</h5>
												<br />
												<p className='text-center'>Para acceder nuevamente a los videos, en caso de que hayas abonado ponete en contacto conmigo, de lo contrario te solicito que normalices el pago del servicio.
												</p>
											</div>
											:
											currentVideos.map((video, index) => <CollapsableItem key={index} video={video} index={index} />)
								}
							</div>
					}

				</div>
			</section>
		</div>
	);
}


const mapStateToProps = (state) => {
	const { excercises, isFetching } = state.trainerState
	
	return {
		isFetching,
		videos: excercises.sort((a, b) => {
			if (a.category < b.category) {
				return -1;
			}
			if (a.category > b.category) {
				return 1;
			}
			return 0;
		})
	}
}

export default connect(mapStateToProps)(Video)