const initialState = []


const trips = (state = initialState, action) => {
    switch (action.type) {
      case "DISPLAY_TRIPS":
        return Array.from(action.payload.trips);
      default:
        return state;
    }
}

export default trips;