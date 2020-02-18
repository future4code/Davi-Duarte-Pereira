const initialState = {
  birthdate: new Date()
}

const dateForm = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BIRTHDAY":
      console.log('passed by action', action.payload.date)
      return {...state, birthdate: action.payload.date}
    default:
      console.log("not passed by action", state)
      return state;
  }
}

export default dateForm