import { combineReducers } from 'redux';
import mapsReducer from './mapsReducer';

const ampleReducer = combineReducers({
    mapsData: mapsReducer
});

export default ampleReducer;