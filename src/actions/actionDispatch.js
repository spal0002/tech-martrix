import * as actionTypes from './actionTypes';


export const onSetCoordinates = (coordinates) => {
    return {
        type: actionTypes.ON_SET_COORDINATES,
        coordinates: coordinates
    };
};

