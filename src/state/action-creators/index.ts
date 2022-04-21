import { Dispatch } from 'redux';

export const changeView = (view: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'VIEW_REDUCER',
            payload: view
        });
    }
};
