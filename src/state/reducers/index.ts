import { combineReducers } from 'redux';
import viewReducer from './viewReducer';

const reducers = combineReducers({
    view: viewReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
