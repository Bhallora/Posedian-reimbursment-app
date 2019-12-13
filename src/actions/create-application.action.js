import { CREATE_APPLICATION } from "../constants/action-types";
export const createApplication = () => dispatch => {
    dispatch({
        type: CREATE_APPLICATION,
        //payload: application
    })
}