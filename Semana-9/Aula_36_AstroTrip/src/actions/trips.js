import axios from 'axios'
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

export const getTrips = () => async (dispatch) => {
	await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips'
    ).then((res) => {
        dispatch(displayTrips(res.data.trips))
    })
};

export const getTripById = (id) => async (dispatch) => {
	await axios.get(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trip/${id}`,
		{
			headers: {
				auth: window.localStorage.getItem('token')
			}
		}
    ).then((res) => {
        console.log("dados: ", res.data)
        dispatch(displayDetailedTrip(res.data))
    }).catch((err) => {
		console.log(err);
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

export const login = (email, password) => async dispatch => {
	await axios.post(
		"https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/login",
		{
			email,
			password
		}
	).then((res) => {
		window.localStorage.setItem("token", res.data.token);
		console.log(res);
		dispatch(push(routes.trips));
	}).catch((err) => {
		console.log(err)
	})
};

export const getApplicationData = (tripId, data) => async (dispatch) => {
	await axios.post(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips/${tripId}/apply`, 
		data
	).then(() => {
		console.log("deu bom")
	}).catch(() => {
		console.log("deu ruim clan")
	})
}


export const createNewTrip = (data) => async (dispatch) => {
	await axios.post(
		`https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips`,
		data,
		{
			headers: {
				"auth": window.localStorage.getItem('token'),
				"Content-Type": "application/json"
			}
		}
	).then((res) => {
		console.log("sucesso: ", res)
	}).catch((err) => {
		console.log(err)
	})
}













// export const getApplicationData = (tripId, data) => (dispatch) => {
// 	const appData = {
// 		tripId,
// 		data,
// 	}

// 	dispatch(apllyToTrip(appData.tripId, appData.data));
// }

// export const apllyToTrip = async (tripId, data) => {
// 	await axios.post(
// 		`https://us-central1-missao-newton.cloudfunctions.net/futureX/davi/trips/${tripId}/apply`, 
// 		data
// 	).then(() => {
// 		console.log("deu bom")
// 	}).catch(() => {
// 		console.log("deu ruim clan")
// 	})
// };