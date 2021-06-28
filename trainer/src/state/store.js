import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import trainerState from './reducers'
import {getExercises} from './actions'




let rootReducer = combineReducers({
    trainerState,
  })

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export default function generateStore(){
    let store = createStore(
        rootReducer, 
        composeEnhancers(applyMiddleware(thunk))
    )

    getExercises()(store.dispatch, store.getState)

    return store
}

