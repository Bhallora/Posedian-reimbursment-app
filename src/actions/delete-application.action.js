import { DELETE_APPLICATION } from "../constants/action-types";
const deleteApplication = () => dispatch => {
    dispatch({
        type: DELETE_APPLICATION
    })

}