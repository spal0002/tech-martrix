import * as actionDispatch from './actionDispatch';
import * as services from '../services';


export const setCoordinates = (coordinates) => {
    // services.requestPOST to make a request
    return dispatch => {
        dispatch(actionDispatch.onSetCoordinates(coordinates));
    }

}
