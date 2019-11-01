const initialState = []

const matches = (state = initialState, action) => {

    switch (action.type) {
      case "SHOW_MATCHES":
        return Array.from(action.payload.matches);
      default:
        return state
    }
  }
  
  export default matches