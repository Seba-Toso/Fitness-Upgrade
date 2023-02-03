import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { db } from '../db/firebase';
import { IoCheckbox, IoCloseCircle, IoTrashBin } from 'react-icons/io5';


const ClientList = ({filter = ''}) => {
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([...data])
  const [isFetching, setIsfetching] = useState(false);

  useEffect(() => {
    setIsfetching(true)
    const clientsMessages = db.collection('Suscription').onSnapshot(snap => {
      let data = snap.docs.map(doc => ({ ...doc.data(), 'id': doc.id }))
      setData(data)
      setClients(data)
      setIsfetching(false)
    });

    return () => clientsMessages()
  }, []);

  useEffect(() => {
    let usersToUpdate = [...data]
    if(!filter || filter === 'date' || filter === 'alphabetical'){
            //Filtro por fecha de ingreso o alfabéticamente
      let users = usersToUpdate.sort( (a, b) => {
        let item
        if(!filter || filter === 'date'){
            item = 1
        }
        if(filter === 'alphabetical'){
            if(a.firstName.toUpperCase() < b.firstName.toUpperCase()){item = -1}
            else if(a.firstName.toUpperCase() > b.firstName.toUpperCase()){item = 1}
            else{ item = 0}
        }
        return item
      })
      setClients(users)
    }else if(filter || filter !== 'date' || filter !== 'alphabetical'){
      //Filtro por nombre o apellido
      let users = usersToUpdate.filter(user => {
        let userFullName = `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
        return userFullName.includes(filter.toUpperCase())
      })
      setClients(users)
    }else(setClients(data))
  },[filter])

  const handleDelete = (userIndex, userId) => {
    db.collection('Suscription').doc(userId).delete()
    //.then(() => window.location.reload())
  }

  const handleCancelSubscription = useCallback((userIndex, userId) => {
    const user = data[userIndex]
    const updatedUser = { ...user, payment: !user.payment }

    db.collection('Suscription').doc(userId).set(updatedUser)
  }, [data])

  const messageList = useMemo(() => {
    
    if (!clients.length) {
      return (
        <div className="container  mt-5 mb-5 text-center">
          <h2 className='fallbackMessage'>{!isFetching ? 'CARGANDO CLIENTES...' : 'AUN NO HAY CLIENTES'}</h2>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="accordion" id="accordionExample"  >
          {
            clients.map((doc, index) => {
              return (
                <div className="card" key={doc.id}>
                  <div className={`card-header show`} id={"heading-" + doc.firstName}>
                    <h2 className="mb-0 d-flex">
                      <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={"#collapse-" + doc.firstName} aria-expanded="false" aria-controls={"collapse-" + doc.firstName} >
                        {doc.firstName + ' ' + doc.lastName}
                      </button>
                        <>
                          <p className='state state-title'>Estado:</p>
                          {doc.payment ? <p className='state'>Activo</p> : <p className='state'>Inactivo</p>}
                          <button className={`btn btn-${doc.payment ? 'success' : 'danger'}`} type="button" onClick={() => handleCancelSubscription(index, doc.id)} style={{ margin: '0 5px' }}>
                            {doc.payment ? <IoCheckbox fontSize={16} style={{ verticalAlign: 'baseline' }} /> : <IoCloseCircle fontSize={16} style={{ verticalAlign: 'baseline' }} />}
                          </button>
                          <button className="btn btn-danger" type="button" onClick={() => handleDelete(index, doc.id)}>
                            <IoTrashBin fontSize={16} style={{ verticalAlign: 'baseline' }} />
                          </button>
                        </>
                    </h2>
                  </div>

                  <div id={"collapse-" + doc.firstName} className="collapse" aria-labelledby={"heading-" + doc.firstName} data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="table" >
                        {/* <span className='tableItem'>
                            <div className='tableTitle'>HABILITAR </div>
                            <div className='tableDescription tableAction' onClick={() => handleCancelSubscription(index, doc.id)}>
                              {doc.payment ? <IoCheckbox color='#48ad5f' fontSize={18} /> : <IoCloseCircle color='#a03549' fontSize={18} />}
                            </div>
                          </span> */}
                        <span className='tableItem'>
                          <div className='tableTitle'>ID: </div>
                          <div className='tableDescription'>{doc.id}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>NOMBRE: </div>
                          <div className='tableDescription'>{doc.firstName}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>APELLIDO: </div>
                          <div className='tableDescription'>{doc.lastName}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>E-MAIL: </div>
                          <div className='tableDescription'>{doc.email}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>ANTECEDENTES MEDICOS: </div>
                          <div className='tableDescription'>{doc.medicalHistory}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>PESO: </div>
                          <div className='tableDescription'>{doc.weight}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>ALTURA: </div>
                          <div className='tableDescription'>{doc.height}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>EDAD: </div>
                          <div className='tableDescription'>{doc.age}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>DÍAS DE ENTRENAMIENTO: </div>
                          <div className='tableDescription'>{doc.availableDays}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>LUGAR DE ENTRENAMIENTO: </div>
                          <div className='tableDescription'>{doc.trainingPlace}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>DETALLE DE ELEMENTOS </div>
                          <div className='tableDescription'>{doc.tools}</div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>OBJETIVO: </div>
                          <div className='tableDescription'>{doc.target}</div>
                        </span>
                        {/* <span className='tableItem'>
                            <div className='tableTitle'>NUMERO DE CUPON DE OPERACION: </div>
                            <div className='tableDescription'>{doc.cuponNumber}</div>
                          </span> */}
                        <span className='tableItem'>
                          <div className='tableTitle'>FOTO DE FRENTE: </div>
                          <div className='tableDescription'>
                            <img
                              src={doc.imageFront}
                              alt="front"
                              width="100px"
                            />
                          </div>
                        </span>
                        <span className='tableItem'>
                          <div className='tableTitle'>FOTO DE ESPALDA: </div>
                          <div className='tableDescription'>
                            <img
                              src={doc.imageBack}
                              alt="front"
                              width="100px"
                            />
                          </div>
                        </span>
                        {/* <span className='tableItem'>
                            <div className='tableTitle'>BORRAR USUARIO</div>
                            <div className='tableDescription tableAction' onClick={() => handleDelete(index, doc.id)}>
                              <svg
                                type="button"
                                className=" bi bi-trash"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                ns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg>
                            </div>
                          </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }, [clients, isFetching, handleCancelSubscription])

  return (
    <div>
      <div className="Container projectSlider section">
        {messageList}
      </div>
    </div>
  );
}

export default memo(ClientList);