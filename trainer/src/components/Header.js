/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from './Auth';
import { withAlert } from 'react-alert';
import Iso from '../assets/Iso-NC.png';
import { useFirebaseApp } from 'reactfire';
import avatar from '../assets/adminAvatar.png';
import 'firebase/auth';
import './Css/Header.css';

const Header = ({ alert }) => {
	const firebase = useFirebaseApp();
	const history = useHistory();
	const { currentUser } = useContext(AuthContext);
	//console.log(currentUser)

	const logout = () => {
		firebase.auth().signOut()
			.then(() => {
				history.push('/login')
				alert.show('Has cerrado sesión.', { type: 'error' })
			})
	}

	const getCountry = () => {
		const localStrg = localStorage.getItem('country')

		if(localStrg === 'Argentina' || !localStrg || localStrg === undefined || localStrg === null){
			return 'Argentina'
		}else{
			return 'Exterior'
		}
	}

	return (
		<>
			<div id="header" className='header-mobile'>
				<nav className="navbar navbar-expand-lg navbar-dark fixed-top text-light">
					<a className="navbar-brand" href="/">
						<img
							src={Iso}
							width="50"
							height="50"
							className="d-inline-block align-top rounded mr-2"
							alt="Logo"
							data-toggle="collapse" data-target=".navbar-collapse"
						/>
					</a>Fitness Upgrade
					<button className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active mt-2">
								<Link to="/" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse">Home</Link>
							</li>
							<li className="nav-item active mt-2">
								<Link to="/us" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse">Conoceme</Link>
							</li>
							{
								currentUser &&
								<li className="nav-item active mt-2">
									<Link to="/video" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse">Videos</Link>
								</li>
							}
							<li className="nav-item active mt-2">
								<Link to="/contact" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse">Contacto</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle active mt-2" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Usuarios
								</a>
								<div className="dropdown-menu subNavBar" aria-labelledby="navbarDropdownMenuLink">
									<Link className="nav-link" to="/register" data-toggle="collapse" data-target=".navbar-collapse">Registro</Link>
									{
										!currentUser &&
										<Link className="nav-link" to="/login" data-toggle="collapse" data-target=".navbar-collapse">Login</Link>
									}
								</div>
							</li>
							{
								currentUser && (currentUser.email === 'admin@gmail.com' || currentUser.email === 'jsgtoso@gmail.com') &&
								<li className="nav-item active mt-2">
									<Link to="/admin">
										<img
											src={avatar}
											width="40"
											height="40"
											className="d-inline-block align-top rounded-circle p-1"
											alt="Logo"
											data-toggle="collapse" data-target=".navbar-collapse"
										/>
									</Link>
								</li>
							}
							{
								currentUser &&
								<li className="nav-item active mt-2">
									<button
										className="myButton mt-2 mb-2"
										type="button"
										onClick={logout}
									>
										Logout
									</button>
								</li>
							}
						</ul>
					</div>
				</nav>
			</div>

			<div id="header" className='header-desktop'>
				<nav className="navbar navbar-expand-lg navbar-dark fixed-top text-light">
					<a className="navbar-brand" href="/">
						<img
							src={Iso}
							width="50"
							height="50"
							className="d-inline-block align-top rounded mr-2"
							alt="Logo"
							data-toggle="collapse" data-target=".navbar-collapse"
						/>
						<p className='brand-title'>Fitness Upgrade</p>
					</a>
					<button className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active mt-2">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="nav-item active mt-2">
								<Link to="/us" className="nav-link">Conoceme</Link>
							</li>
							{
								currentUser &&
								<li className="nav-item active mt-2">
									<Link to="/video" className="nav-link">Videos</Link>
								</li>
							}
							<li className="nav-item active mt-2">
								<Link to="/contact" className="nav-link">Contacto</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle active mt-2" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Usuarios
								</a>
								<div className="dropdown-menu subNavBar" aria-labelledby="navbarDropdownMenuLink">
									<Link className="nav-link" to="/register">Registro</Link>	
									{
										!currentUser &&
										<Link className="nav-link" to="/login">Login</Link>
									}
									{
										currentUser && getCountry() !== 'Argentina' &&
										<a className="nav-link" href="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=R4KRJYS2879PU" target="_blank" rel="noreferrer">
											<img src="https://www.paypalobjects.com/en_US/i/btn/btn_unsubscribe_LG.gif" border="0" alt='unsuscribe'/>
										</a>
									}
								</div>
							</li>
							{
								currentUser && (currentUser.email === 'admin@gmail.com' || currentUser.email === 'jsgtoso@gmail.com') &&
								<li className="nav-item active mt-2">
									<Link to="/admin">
										<img
											src={avatar}
											width="40"
											height="40"
											className="d-inline-block align-top rounded-circle p-1"
											alt="Logo"
											data-toggle="collapse" data-target=".navbar-collapse"
										/>
									</Link>
								</li>
							}
							{
								currentUser &&
								<li className="nav-item active mt-2">
									<button
										className="myButton"
										type="button"
										onClick={logout}
									>
										Logout
									</button>
								</li>
							}
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}

export default withAlert()(Header);
//window.location.replace('')