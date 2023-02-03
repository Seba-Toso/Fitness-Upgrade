import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../db/firebase';
import { IoTrashBinSharp } from 'react-icons/io5';

const ClientMessage = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsfetching] = useState(false);

    useEffect(() => { 
        setIsfetching(true)
        const clientsMessages = db.collection('Comment').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setIsfetching(false)
            setData(data)
        });
        return () => clientsMessages()
    }, []);

    const handleDelete = ( id ) => {
        db.collection('Comment').doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    const messageList = useMemo(() => {

        return !data.length ? (
            <div className="container mt-5 mb-5 text-center">
            <h2 className='fallbackMessage'>{isFetching? 'CARGANDO MENSAJES...' : 'AUN NO HAY MENSAJES'}</h2>
            </div>
        )
        :
        (
            <div className="container">
                {
                    data.map( doc => {
                        return (
                            <div className="table" key={doc.id} >
                                <span className='tableItem'>
                                    <div className='tableTitle'>BORRAR</div>
                                    <div className='tableDescription tableAction' onClick={() => handleDelete(doc.id) }>
                                        <IoTrashBinSharp />
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ID</div>
                                    <div className='tableDescription'>{doc.id}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>NOMBRE</div>
                                    <div className='tableDescription'>{doc.name}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>APELLIDO</div>
                                    <div className='tableDescription'>{doc.surname}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>E-MAIL</div>
                                    <div className='tableDescription'>{doc.email}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>MENSAJE</div>
                                    <div className='tableDescription'>{doc.comment}</div>
                                </span>
                            </div>
                        )
                    })
                }     
            </div>
        )
    }, [ data, isFetching ])





    return (
        <div>
            <div className="Container projectSlider section">
                { messageList }
            </div>
        </div>
    );
}

export default memo(ClientMessage);