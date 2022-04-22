import { combineReducers } from 'redux';
import viewReducer from './viewReducer';

const reducers = combineReducers({
    view: viewReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
