const initialState = "Home";

const reducer = (state: String = initialState) => {
  return {
    type: 'VIEW_REDUCER',
    payload: {
      view: 'view',
    },
  };
}

export default reducer;
