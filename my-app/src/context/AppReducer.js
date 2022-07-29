const AppReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transection: state.transection.filter(
          (transection) => transection.id !== action.payload
        ),
      };

    case "ADD":
      return {
        ...state,
        transection: [action.payload, ...state.transection],
      };
    default:
      return state;
  }
};

export default AppReducer;
