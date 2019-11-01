import axios from 'axios';

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/clear')
};

export const showNewProfile = (id, name, photo, bio, age) => ({
	type: "SHOW_NEW_PROFILE",
	payload: {
		id,
		name,
		photo,
		bio,
		age,
	}
});

export const getNewProfile = () => async (dispatch) => {
	await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/person'
	).then((res) => {
		dispatch(showNewProfile(
			res.data.profile.id,
			res.data.profile.name, 
			res.data.profile.photo, 
			res.data.profile.bio, 
			res.data.profile.age
		))
	}).catch((err) => {
		console.log(err);
	})
};

export const requestChosenProfile = (id) => async () => {
	const data = {
		id,
		choice: true
	}
	
	await axios.post(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi/choose-person',
		data
	).then((res) => {

	}).catch((err) => {
		console.log(err);
	})
};


