import axios from 'axios';

export const showMatches = (matches) => ({
	type: "SHOW_MATCHES",
	payload: {
		matches,
	}
});

export const requestMatches = () => async (dispatch) => {
	await axios.get(
		"https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/matches"
	).then((res) => {
		dispatch(showMatches(
			res.data.matches
		))
	}).catch((err) => {
        console.log(err)
    })
};
