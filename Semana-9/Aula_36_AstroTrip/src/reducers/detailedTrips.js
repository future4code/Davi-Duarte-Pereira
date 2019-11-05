// const initialState = []

// MY INITIAL IDEA OF STATE://


const initialState = {
  trip: {
    id: "vX4GWQtFDENjFEo7EAF1",
    name: "Festança Marciana",
    description: "Uma viagem bem legal, na melhor época de marte",
    planet: "Marte",
    durationInDays: 228,
    date: "21/12/21",
    candidates: [
        {
            id: "JNMNNhm1LF7D9Xg4I39L",
            name: "Pedro Darvas",
            country: "Noruega",
            applicationText: "Sou um bom candidato porque amo luas",
            profession: "Fotógrafo",
            age: 22
        },

        {
            id: "WhWp4kupNEc3T9DdQeNG",
            age: 23,
            name: "Soter Padua",
            country: "Brasil",
            applicationText: "Sou um bom candidato por X, Y e Z",
            profession: "Capturador de Bug"
        }
    ]
  }
}


const detailedTrip = (state = initialState, action) => {
    switch (action.type) {
      case "DISPLAY_DETAILED_TRIP":
        const newState = action.payload.trip;
        console.log("Updated the state", newState);
        return newState;
      default:
        return state;
    }
}

export default detailedTrip;