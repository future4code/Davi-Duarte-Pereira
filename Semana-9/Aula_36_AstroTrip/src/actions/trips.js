import axios from 'axios'

export const getTrips = () => async (dispatch) => {
	await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips'
    ).then((res) => {
        dispatch(displayTrips(res.data.trips))
    })
}

export const getTripById = (id) => async (dispatch) => {
	await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trip/${id}`
    ).then((res) => {
        console.log("dados: ", res.data)
        dispatch(displayDetailedTrip(res.data))
    })
}

export const displayTrips = (trips) => ({
	type: "DISPLAY_TRIPS",
	payload: {
		trips,
	}
});

export const displayDetailedTrip = (trip) => ({
	type: "DISPLAY_DETAILED_TRIP",
	payload: {
		trip,
	}
});