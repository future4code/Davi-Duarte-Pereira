const initialState = {
  trip: {
    id: "Loading",
    name: "Loading",
    description: "Loading",
    planet: "Loading",
    durationInDays: "Loading",
    date: "Loading",
    candidates: [
        {
            id: "Loading",
            name: "Loading",
            country: "Loading",
            applicationText: "Loading",
            profession: "Loading",
            age: "Loading"
        }
    ]
  }
}


const detailedTrip = (state = initialState, action) => {
    switch (action.type) {
      case "DISPLAY_DETAILED_TRIP":
        const newState = action.payload.trip;
        // console.log("Updated the state", newState);
        return newState;
      default:
        return state;
    }
}

export default detailedTrip;