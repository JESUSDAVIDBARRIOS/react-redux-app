import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const changeView = (view: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'VIEW_REDUCER',
            payload: view
        });
    }
};
