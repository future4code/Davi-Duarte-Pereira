import Axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { changeSnackbar } from '../Snackbar';

export const requestSignUp = (data) => async (dispatch) => {
    await Axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup",
        data
    ).then((res) => {
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('username', res.data.name);
        dispatch(push(routes.feed))
        const message = "Successfully SingUp and Login"
        dispatch(changeSnackbar(message, "success"))
    }).catch((err) => {
        console.log(data)
        const message = "Error when SignUp"
        dispatch(changeSnackbar(message, "error"))
    })
}