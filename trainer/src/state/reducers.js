import { initialState } from "./initialState"
import {
    GET_EXERCISES, 
    GET_EXERCISES_SUCCESS, 
    GET_EXERCISES_ERROR, 
    UPDATE_EXERCISES, 
    UPDATE_EXERCISES_SUCCESS, 
    UPDATE_EXERCISES_ERROR,
    DELETE_EXERCISE,
    DELETE_EXERCISE_SUCCESS,
    DELETE_EXERCISE_ERROR,
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from "./actions"



export default function trainerState(state = initialState, action){
    switch(action.type){
        case GET_EXERCISES:
            return {...state, isFetching: true, error: null}
        case GET_EXERCISES_SUCCESS:
            return {...state, excercises: action.payload, isFetching: false}

        case GET_EXERCISES_ERROR:
            return {...state, isFetching: false, error: action.payload}

        case UPDATE_EXERCISES:
            return {...state, isFetching: true, error: null}
        
        case UPDATE_EXERCISES_SUCCESS:
            return {...state, excercises: action.payload, isFetching: false}

        case UPDATE_EXERCISES_ERROR:
            return {...state, isFetching: false , error: action.payload}
        
        case DELETE_EXERCISE:
            return {...state, isFetching: true}
        
        case DELETE_EXERCISE_SUCCESS:
            return {...state, excercises: action.payload, isFetching: false}

        case DELETE_EXERCISE_ERROR:
            return {...state, error: action.payload, isFetching: false}

        case DELETE_CATEGORY:
            return {...state, isFetching: true}
        
        case DELETE_CATEGORY_SUCCESS:
            return {...state, excercises: action.payload, isFetching: false}

        case DELETE_CATEGORY_ERROR:
            return {...state, error: action.payload, isFetching: false}
        
        default:
            return state
    }
}



