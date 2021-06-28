import React, { useState, useEffect, useMemo, memo, useCallback} from 'react';
import { db } from '../db/firebase';
import { IoCheckbox, IoCloseCircle } from 'react-icons/io5';


const ClientList = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsfetching] = useState(false);
 


    useEffect(() => { 
        setIsfetching(true)
        const clientsMessages = db.collection('Suscription').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
            //console.log(data)
            setIsfetching(false)
        });
        return () => clientsMessages()
    
    }, []);

    const handleDelete = ( id) => {
        db.collection('Suscription').doc(id).delete()
        .then(() => window.location.reload())
    }

    const handleCancelSubscription = useCallback((userIndex, userId) => {
        const user = data[userIndex]
        const updatedUser = {...user, payment: false}

        db.collection('Suscription').doc(userId).set(updatedUser)
    },[data])

    const messageList = useMemo(() => {
        return !data.length ? (
            <div className="container  mt-5 mb-5 text-center">
            <h2 style={{color:'White'}}>{!isFetching? 'CARGANDO CLIENTES...' : 'AUN NO HAY CLIENTES'}</h2>
            </div>
        )
        :
        (
            <div className="container">
                {
                    data.map( (doc, index) => {
                        return (
                            <div className="table" key={doc.id} >

                                <div class="modal fade bg-dark" 
                                 id="exampleModal"
                                 tabindex="-1" 
                                 role="dialog" 
                                 aria-labelledby="exampleModalLabel" 
                                 aria-hidden="true"

                                 >
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content" style={{color:'white', background:'black'}}>
                                    <div class="modal-header">
                                        <h2 class="modal-title text-light" id="exampleModalLabel">Eliminar Cuenta de Cliente</h2>
                                        <button 
                                            type="button" 
                                            class="close" 
                                            data-dismiss="modal" 
                                            aria-label="Close"
                                        >
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                       <h4 className="text-light text-center"> Esto elimanará la cuenta definitiva del Cliente. Deberá registrarse  
                                        para acceder a los videos.</h4>
                                    </div>
                                    <div class="modal-footer">
                                        <button 
                                            type="button" 
                                            className="myButton"
                                            onClick={() => handleDelete(doc.id) }
                                        >Confirmar</button>
                                    </div>
                                    </div>
                                </div>
                                </div>


                                <span className='tableItem'>
                                    <div className='tableTitle'>BORRAR</div>
                                    <div className='tableDescription tableAction'>    
                                        <svg 
                                        type="button" 
                                        className="btn btn-primary" 
                                        data-toggle="modal" 
                                        data-target="#exampleModal"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" 
                                        height="16" 
                                        fill="currentColor" 
                                        viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>PAGO</div>
                                    <div className='tableDescription tableAction' onClick={() => handleCancelSubscription(index, doc.id)}>
                                    {doc.payment ? <IoCheckbox color='#48ad5f' fontSize={18}/> : <IoCloseCircle color='#a03549' fontSize={18}/>}
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ID</div>
                                    <div className='tableDescription'>{doc.id}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>NOMBRE</div>
                                    <div className='tableDescription'>{doc.firstName}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>APELLIDO</div>
                                    <div className='tableDescription'>{doc.lastName}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>E-MAIL</div>
                                    <div className='tableDescription'>{doc.email}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ANTECEDENTES MEDICOS</div>
                                    <div className='tableDescription'>{doc.medicalHistory}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>PESO</div>
                                    <div className='tableDescription'>{doc.weight}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ALTURA</div>
                                    <div className='tableDescription'>{doc.height}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>EDAD</div>
                                    <div className='tableDescription'>{doc.age}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>CANTIDAD DE DIAS PARA ENTRENAR</div>
                                    <div className='tableDescription'>{doc.availableDays}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>LUGAR DE ENTRENAMIENTO</div>
                                    <div className='tableDescription'>{doc.trainingPlace}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>DISPONE DE ELEMENTOS? DETALLARLOS:</div>
                                    <div className='tableDescription'>{doc.tools}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>OBJETIVO</div>
                                    <div className='tableDescription'>{doc.target}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>NUMERO DE CUPON DE OPERACION</div>
                                    <div className='tableDescription'>{doc.cuponNumber}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>FOTO DE FRENTE</div>
                                    <div className='tableDescription'>
                                        <img 
                                        src={doc.imageFront} 
                                        alt="front"
                                        width="100px"
                                        />
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>FOTO DE ESPALDA</div>
                                    <div className='tableDescription'>
                                        <img 
                                        src={doc.imageBack} 
                                        alt="front"
                                        width="100px"
                                        />
                                    </div>
                                </span>
                            </div>
                        )
                    })
                }     
            </div>
        )
    }, [ data, isFetching, handleCancelSubscription ])





    return (
        <div>
         <div className="Container projectSlider section">
                { messageList }
            </div>
        </div>
    );
}

export default memo(ClientList);