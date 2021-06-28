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
        </div>
    );
}

export default Admin;