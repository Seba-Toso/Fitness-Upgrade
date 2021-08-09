/* eslint-disable no-lone-blocks */
import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/Auth';
import { IoTrashBinSharp } from 'react-icons/io5';
import { connect } from 'react-redux'
import { deleteExercise, deleteCategory } from '../state/actions'

const CollapsableItem = ({video, index, deleteExercise, deleteCategory}) => {

    const  {currentUser} = useContext(AuthContext)
    const isAdmin = currentUser === null? false : currentUser.email === 'admin@gmail.com' ? true : false 

    const {category, image, exercises} = video

    const handleVideos = () => {
        if(exercises.length > 0){
            return (
                exercises.sort( (a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }).map( (excersise,index) => 
                    <li key={index} className="list-group-item videoItem" style={{fontSize: isAdmin? '12px' : '14px'}} >
                        {
                            isAdmin && 
                            <span 
                                className='tableDescription tableAction' 
                                style={{fontSize: '12px', marginLeft: '-15px', marginRight: '15px', border: '1px solid crimson', borderRadius: '5px'}} 
                                onClick={() => deleteExercise(category, excersise.name)}
                            >
                                <IoTrashBinSharp />
                            </span> 

                        }
                        <a href={excersise.link} target='blank' style={{textDecoration: 'none', color: 'white', verticalAlign: 'middle'}}>
                            {excersise.name} 
                        </a>
                    </li> 
                )
            )
        }
        return <li className="list-group-item videoItem" style={{fontSize: isAdmin? '12px' : '14px'}}>No hay videos en esta categoría.</li>
    }

    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }

    return (

        <div className="col-lg-3 col-md-6">
            <div className="class-item">
                <div className="ci-pic">
                    <img src={image} alt="service" className="rounded" loading="lazy" />
                </div>
                <div className="ci-text">
                    <span>
                        Ejercicios de
                        {
                        isAdmin && 
                            <span 
                                className='tableDescription tableAction' 
                                style={{marginLeft: '30px', border: '1px solid crimson', borderRadius: '5px'}} 
                                onClick={() => deleteCategory(category)}
                            >
                                <IoTrashBinSharp />
                            </span> 
                        }
                    </span>
                    <h5>{category}</h5>
                    <a href="#prices" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-controls={`collapse${index}`} onClick={handleOpen}>
                        <i className={`fa ${isOpen? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </a>
                </div>
                <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body videoList">
                            <ul className="list-group list-group-flush videoList">
                                {handleVideos()}
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {deleteExercise, deleteCategory})(CollapsableItem);













