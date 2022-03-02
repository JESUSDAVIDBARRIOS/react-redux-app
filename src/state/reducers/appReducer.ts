const initialState = "Home";

type Action = {
    type: string,
    buttonName?: string
}

const reducer = (state: string = initialState, action: Action) => {
    switch(action.type) {
        case "changeButtonTitle":
            return state + action.buttonName;
        default:
            return state
    }
}


export default reducer