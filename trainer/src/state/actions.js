import { db } from '../db/firebase';

//definitions
export const GET_EXERCISES = 'GET_EXERCISES'
export const GET_EXERCISES_SUCCESS = 'GET_EXERCISES_SUCCESS'
export const GET_EXERCISES_ERROR = 'GET_EXERCISES_ERROR'
export const UPDATE_EXERCISES = 'UPDATE_EXERCISES'
export const UPDATE_EXERCISES_SUCCESS = 'UPDATE_EXERCISES_SUCCESS'
export const UPDATE_EXERCISES_ERROR = 'UPDATE_EXERCISES_ERROR'
export const DELETE_EXERCISE = 'DELETE_EXERCISE'
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS'
export const DELETE_EXERCISE_ERROR = 'DELETE_EXERCISE_ERROR'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR'



//aux functions 
const fetchDataFromDB = async () => {
    try {
        const dbReference = db.collection('Videos').doc('PersonlTraining')
        const dbData = await dbReference.get().then(res => {
            return res.data()
        })
        return dbData
    } catch (error) {
        console.error('Ocurrió un error realizando el fetching a la base de Datos')
        console.error(error)
    }
}


//action functions
export const getExercises = () => (dispatch) => {
    dispatch({
        type: GET_EXERCISES
    })

    fetchDataFromDB()
    .then(dbVideos => {
        return(
            dispatch({
                type: GET_EXERCISES_SUCCESS,
                payload: dbVideos.videos
            })
        )
    })
    .catch(error => {
        return(
            dispatch({
                type: GET_EXERCISES_ERROR,
                payload: error
            })
        )
    })

}

export const updateExercises = (image, category, name, link) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_EXERCISES
    })

    const excercises = getState().trainerState.excercises
    let updatedExcercises

    
    if(image != null){
        updatedExcercises = excercises.concat({
            image,
            category,
            exercises: [{
                name, 
                link
            }]
        })
    }else{
        updatedExcercises = excercises.map( excercise => {
            if(excercise.category !== category){
                return excercise
            }
            const updatedExercise = excercise.exercises.concat({link: link, name: name})

            return {...excercise, exercises: updatedExercise}
        })
    }
    
    db.collection('Videos').doc('PersonlTraining').set({
        videos: updatedExcercises
    })
        .then(
        response => {
            //console.log(response)
            return (
                dispatch({
                type: UPDATE_EXERCISES_SUCCESS,
                payload: updatedExcercises
                })
            )
        })
        .catch(
            error => {
                console.log(error)
                return (
                    dispatch({
                    type: UPDATE_EXERCISES_ERROR,
                    payload: error
                    })
                )
            })
}

export const deleteExercise = (category, name) => (dispatch, getState) => {
    dispatch({
        type: DELETE_EXERCISE
    })

    const excercises = getState().trainerState.excercises
    let updatedExcercises = excercises.map( excercise => {
        if(excercise.category !== category){
            return excercise
        }
        const updatedExercise = excercise.exercises.map(excercise => {
            return excercise.name === name ? null : excercise
        }).filter(excercise => excercise !== null)

        return {...excercise, exercises: updatedExercise}
    })

    db.collection('Videos').doc('PersonlTraining').set({
        videos: updatedExcercises
    })
        .then(
        response => {
            //console.log(response)
            return (
                dispatch({
                type: DELETE_EXERCISE_SUCCESS,
                payload: updatedExcercises
                })
            )
        })
        .catch(
            error => {
                console.log(error)
                return (
                    dispatch({
                    type: DELETE_EXERCISE_ERROR,
                    payload: error
                    })
                )
            })
}


export const deleteCategory = (category) => (dispatch, getState) => {
   
    dispatch({
        type: DELETE_CATEGORY
    })
   
    const excercises = getState().trainerState.excercises
    
    let updatedExcercises = excercises.map( excercise => {

        if(excercise.category !== category ){
            return excercise
        }
        return null
    }).filter(excercise => excercise !== null)


    db.collection('Videos').doc('PersonlTraining').set({
        videos: updatedExcercises
    })
        .then(
        response => {
            //console.log(response)
            return (
                dispatch({
                type: DELETE_CATEGORY_SUCCESS,
                payload: updatedExcercises
                })
            )
        })
        .catch(
            error => {
                console.log(error)
                return (
                    dispatch({
                    type: DELETE_CATEGORY_ERROR,
                    payload: error
                    })
                )
            })

}