/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { updateExercises } from '../state/actions'
import { firebaseApp } from '../db/firebase';
import { connect } from 'react-redux'



const AdminVideos = ({ alert, updateExercises }) => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const [inputs, setInputs] = useState({
		image: null,
		category: '',
		name: '',
		link: ''

	})

	const handleSubmit = (event) => {
		event.preventDefault()
		addVideo()
		history.push('/video')
		alert.show('Videos actualizados', { type: 'success' })
		setInputs({
			image: '',
			category: '',
			name: '',
			link: ''
		})

	}
	const addVideo = () => {
		updateExercises(inputs.image, inputs.category.toLowerCase(), inputs.name, inputs.link)
	}

	const handleChange = (event) => {
		let input = event.target.placeholder
		input === 'Categoría de Video' ?
			setInputs({ ...inputs, category: event.target.value })
			: input === 'Nombre del Video' ?
				setInputs({ ...inputs, name: event.target.value })
				: input === 'Link del video' ?
					setInputs({ ...inputs, link: event.target.value })
					: setInputs({ ...inputs, link: '' })
	}

	const handleChangeImage = async (event) => {
		setLoading(true)
		const file = event.target.files[0]
		const storageRef = firebaseApp.storage().ref()
		const fileRef = storageRef.child(file.name)
		await fileRef.put(file)
			.then(() => {
				fileRef.getDownloadURL().then(function (url) {
					setInputs({ ...inputs, image: url })
				})
			})
		setLoading(false)
	}



	return (
		<div>
			<section className="contact-section spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<div className="leave-comment">
								<form id="form" onSubmit={handleSubmit}>
									<p>Ingrese Cover (Solo para nueva Categoría)</p>
									{
										loading &&
										<div className="spinner-border text-warning m-2" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									}
									<input
										type="file"
										className="p-2"
										accept="image/*"
										onChange={handleChangeImage}
									/>
									<input
										type="text"
										placeholder="Categoría de Video"
										value={inputs.category}
										onChange={handleChange}
									/>
									<input
										type="text"
										placeholder="Nombre del Video"
										value={inputs.name}
										onChange={handleChange}
									/>
									<input
										type="text"
										placeholder="Link del video"
										value={inputs.link}
										onChange={handleChange}
									/>
									<button
										type="submit"
									>Subir </button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
	}
}

export default withAlert()(connect(mapStateToProps, { updateExercises })(AdminVideos))




