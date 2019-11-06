import axios from 'axios'

export const getTrips = () => async (dispatch) => {
	await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips'
    ).then((res) => {
        dispatch(displayTrips(res.data.trips))
    })
};

export const getTripById = (id) => async (dispatch) => {
	await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trip/${id}`
    ).then((res) => {
        console.log("dados: ", res.data)
        dispatch(displayDetailedTrip(res.data))
    })
};

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


export const getApplicationData = (tripId, data) => (dispatch) => {
	const appData = {
		tripId,
		data,
	}

	dispatch(apllyToTrip(appData.tripId, appData.data));
}


export const apllyToTrip = async (tripId, data) => {
	await axios.post(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips/${tripId}/apply`, 
		data
	).then(() => {
		console.log("deu bom")
	}).catch(() => {
		console.log("deu ruim clan")
	})
};