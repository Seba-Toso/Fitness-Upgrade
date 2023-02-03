import React, { useState } from 'react';
import ClientList from '../components/ClientList';
import ClientMessage from '../components/ClientMessage';
import AdminVideos from '../components/AdminVideos';
import { IoMailOutline, IoPersonCircleOutline, IoPushOutline, IoClose, IoSearchCircle, IoText, IoCalendar } from 'react-icons/io5';
import './Css/Admin.css';

const Admin = () => {
	const [open, setOpen] = useState(false)
	const [filterBy, setFilterBy] = useState('')

	const handleOpen = () => {
		setOpen(prev => !prev)
	}
	const handleFilter = (filter) => {
		setFilterBy(filter)
		handleOpen()
	}

	return (
		<div className="back-admin layoutContainer">
			<section className="classes-section spad">
				<div className="container d-flex dashboardContainer">
					<div className="col-lg-2 col-md-3">
						<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							<button className="nav-link active d-flex justify-content-between" id="v-pills-clientes-tab" data-toggle="pill" data-target="#v-pills-clientes" type="button" role="tab" aria-controls="v-pills-clientes" aria-selected="true">
								Clientes <IoPersonCircleOutline fontSize={20} style={{ verticalAlign: 'baseline' }} />
							</button>
							<button className="nav-link d-flex justify-content-between" id="v-pills-mensajes-tab" data-toggle="pill" data-target="#v-pills-mensajes" type="button" role="tab" aria-controls="v-pills-mensajes" aria-selected="false">
								Mensajes<IoMailOutline fontSize={20} style={{ verticalAlign: 'baseline' }} />
							</button>
							<button className="nav-link d-flex justify-content-between" id="v-pills-videoload-tab" data-toggle="pill" data-target="#v-pills-videoload" type="button" role="tab" aria-controls="v-pills-videoload" aria-selected="false">
								Video nuevo<IoPushOutline fontSize={20} style={{ verticalAlign: 'baseline' }} />
							</button>
						</div>
					</div>
					<div className="col-lg-10">
						<div className="tab-content" id="v-pills-tabContent">

							<div className="tab-pane fade show active" id="v-pills-clientes" role="tabpanel" aria-labelledby="v-pills-clientes-tab">
								<div className="row">
									<div className="col">
										<div className="section-title">
											<span>ADMINISTRADOR</span>
											<h2>CLIENTES REGISTRADOS</h2>
										</div>
									</div>
								</div>
								<ClientList filter={filterBy} />
							</div>

							<div className="tab-pane fade" id="v-pills-mensajes" role="tabpanel" aria-labelledby="v-pills-mensajes-tab">
								<div className="row">
									<div className="col">
										<div className="section-title">
											<span>ADMINISTRADOR</span>
											<h2>MENSAJES DE CLIENTES</h2>
										</div>
									</div>
								</div>
								<ClientMessage />
							</div>

							<div className="tab-pane fade" id="v-pills-videoload" role="tabpanel" aria-labelledby="v-pills-videoload-tab">
								<div className="row">
									<div className="col">
										<div className="section-title">
											<span>ADMINISTRADOR</span>
											<h2>ACTUALIZACION DE VIDEOS</h2>
										</div>
									</div>
								</div>
								<AdminVideos />
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className={`filters d-flex ${open ? 'withBg' : ''}`}>
				<IoSearchCircle className={open ? 'filter active' : 'filter'} fontSize={40} onClick={() => { handleOpen() }} />
				<div className={open ? 'fadeIn' : 'fadeOff'}>
					<div className='filter' onClick={() => { handleFilter('date') }} >
					<IoCalendar fontSize={24} /> <p>Por Fecha</p>
					</div>	
					<div className='filter' onClick={() => { handleFilter('alphabetical') }} >
					<IoText fontSize={24} /> <p>Alfabético</p>
					</div>
					<div className='filter' style={{ paddingBottom: '5px', borderBottom: '1px solid #F36100', margin: '0 auto' }}>
						<input
							type="text"
							className='videoSearchInput'
							onChange={(e) => setFilterBy(e.target.value)}
							placeholder="Busca un usuario"
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
							value={filterBy && filterBy !== 'date' && filterBy !== 'alphabetical' ? filterBy : ''}
						/>
						{
							filterBy && filterBy !== 'date' && filterBy !== 'alphabetical' && filterBy.length > 0 &&
							<IoClose
								onClick={() => { setFilterBy('') }}
								style={{
									cursor: 'pointer',
								}}
							/>
						}
					</div>
				</div>
			</div>

		</div>
	);
}

export default Admin;