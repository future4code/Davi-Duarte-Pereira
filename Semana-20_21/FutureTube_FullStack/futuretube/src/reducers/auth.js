const initialState = {
  isLoggedIn: false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {...state, isLoggedIn: action.payload.isLoggedIn}
    default:
      return state;
  }
}

export default auth