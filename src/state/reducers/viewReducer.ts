import { Action } from "../actions";

const initialState = "Home";

const reducer = (state: string = initialState, action: Action): string => {
  try {
    switch  (action.type) {
      case "changeViewAction":
        return action.payload;
      default:
        return state;
    }
  } catch (error) {
    return state;
  }
};

export default reducer;
