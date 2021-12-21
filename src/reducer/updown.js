const initialState = 0;

const ChangetheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "increament":
      return state + 5;
    case "decreament":
      return state - 6;

    default:
      return state;
  }
};
export default ChangetheNumber;
