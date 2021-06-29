import React from 'react';
import ClientList from '../components/ClientList';
import ClientMessage from '../components/ClientMessage';
import AdminVideos from '../components/AdminVideos';
import './Css/Admin.css';

const Admin = () => {
   

    return (
        <div className="back-admin">
            <section className="choseus-section spad" id="comments">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>ADMINISTRADOR</span>
                                <h2>MENSAJES DE CLIENTES</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientMessage />
            <section className="choseus-section spad" id="registers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>ADMINISTRADOR</span>
                                <h2>CLIENTES REGISTRADOS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientList />
            <section className="choseus-section spad" id="videos">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>ADMINISTRADOR</span>
                                <h2>ACTUALIZACION DE VIDEOS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AdminVideos />
            <a className="text-center btn-flotante distanceOne" href="#comments">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
            </a>
            <a className="text-center btn-flotante distanceTwo" href="#registers">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </a>
            <a className="text-center btn-flotante" href="#videos">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
            </a>
        </div>
    );
}

export default Admin;