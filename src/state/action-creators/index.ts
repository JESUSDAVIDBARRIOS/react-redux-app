import { Dispatch } from 'redux';
import { Action } from '../actions/index';

export const changeView = (viewName: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'changeViewAction',
            payload: viewName
        });
    }
};
