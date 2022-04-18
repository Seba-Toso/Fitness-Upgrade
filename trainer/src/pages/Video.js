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


    let currentVideos = !inputFilter ? videos : videos.map(video => {
        let newExercises = video.exercises.map(excercise =>
            excercise.name.toLowerCase().includes(inputFilter.toLowerCase()) ? excercise : false
        ).filter(excercise => excercise)
        return { ...video, exercises: newExercises }
    }).filter(category => category.exercises.length)

    const handleInput = (e) => {
        e.preventDefault()
        setinputFilter(e.target.value)
    }

    const handleReset = () => { setinputFilter('') }

    if (currentVideos.length === 0) {
        return (
            <div className="layoutContainer">
                <section className="classes-section spad">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Nuestros Ejercicios</span>
                                    <h2>Videos Explicativos</h2>
                                    <span style={{ paddingBottom: '5px', borderBottom: '1px solid #F36100', margin: '0 auto' }}>
                                        <input
                                            type="text"
                                            className='videoSearchInput'
                                            onChange={(e) => handleInput(e)}
                                            placeholder="Busca un video"
                                            disabled={currentVideos.length === 0}
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
                                </div>
                            </div>
                        </div>
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
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="layoutContainer">
            <section className="classes-section spad">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nuestros Ejercicios</span>
                                <h2>Videos Explicativos</h2>
                                <span style={{ paddingBottom: '5px', borderBottom: '1px solid #F36100', margin: '0 auto' }}>
                                    <input
                                        type="text"
                                        className='videoSearchInput'
                                        onChange={(e) => handleInput(e)}
                                        placeholder="Busca un video"
                                        disabled={currentVideos.length === 0}
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
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            fetching ?
                                <h2>Cargando ...</h2>
                                :
                                !userData[0]?.payment && currentUser.email !== 'admin@gmail.com' ?
                                    <div style={{ alignContent: 'center', color: '#fafafa', width: '100%', height: '50vh' }}>
                                        <h2 className='text-center' style={{ color: '#fafafa' }}>Su suscripción ha caducado</h2>
                                        <br />
                                        <br />
                                        <h5 className='text-center' style={{ color: '#fafafa' }}>
                                            El abono mensual no se ha realizado o fue hecho fuera de término.
                                        </h5>
                                        <br />
                                        <p className='text-center'>Para acceder nuevamente a los videos, realice el pago, guarde el número de comprobante y luego active la opción Update para  completar el formulario de Actualización
                                            de pago con el nuevo número de comprobante, esto actualizará el pago y podrá ver los videos.
                                        </p>
                                    </div>
                                    :
                                    currentVideos.map((video, index) => <CollapsableItem key={index} video={video} index={index} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}


const mapStateToProps = (state) => {
    const { excercises, isFetching } = state.trainerState
    //console.log(excercises)
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























{
    /*
    <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                            </div>
                            <div className="carousel-item">
                            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                            </div>
                            <div className="carousel-item">
                            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                            </div>
                        </div>
                        {/*
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        
                        </div>


                        <div id="carouselExampleIndicators2" className="carousel slide mb-5" data-ride="carousel">
                            
                                <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                            </ol>
                            
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service1} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Entrena desde Casa</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                <img src={service2} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Guía de entrenamiento</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
    
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service1} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Entrena desde Casa</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                <img src={service2} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Guía de entrenamiento</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service1} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Entrena desde Casa</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                <img src={service2} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Guía de entrenamiento</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="class-item">
                                                <div className="ci-pic">
                                                    <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                                </div>
                                                <div class="ci-text">
                                                    <span>Videos demostrativos</span>
                                                    <h5>Explicación...</h5>
                                                    <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
    
                            <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            
                        </div>
    
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="class-item">
                                    <div className="ci-pic">
                                        <img src={service1} alt="service" className="rounded border border-warning p-1"/>
                                    </div>
                                    <div class="ci-text">
                                        <span>Entrena desde Casa</span>
                                        <h5>Explicación...</h5>
                                        <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="class-item">
                                    <div className="ci-pic">
                                    <img src={service2} alt="service" className="rounded border border-warning p-1"/>
                                    </div>
                                    <div class="ci-text">
                                        <span>Guía de entrenamiento</span>
                                        <h5>Explicación...</h5>
                                        <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="class-item">
                                    <div className="ci-pic">
                                        <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                    </div>
                                    <div class="ci-text">
                                        <span>Videos demostrativos</span>
                                        <h5>Explicación...</h5>
                                        <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="class-item">
                                    <div className="ci-pic">
                                    <img src={service2} alt="service" className="rounded border border-warning p-1"/>
                                    </div>
                                    <div class="ci-text">
                                        <span>Tips nutricionales</span>
                                        <h4>Explicación...</h4>
                                        <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="class-item">
                                    <div className="ci-pic">
                                        <img src={service5} alt="service" className="rounded border border-warning p-1"/>
                                    </div>
                                    <div class="ci-text">
                                        <span>Videos demostrativos</span>
                                        <h5>Explicación...</h5>
                                        <a href="#prices"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>






    */
}