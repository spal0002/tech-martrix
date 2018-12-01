import * as actionTypes from '../actions/actionTypes';

const intialState = {
    coordinates: [] 
}

const mapsReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_SET_COORDINATES:
            return {
                ...currentState,
                coordinates: action.coordinates
            }
        
        default:
            return currentState
    }
}

export default mapsReducer;