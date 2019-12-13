import { FETCH_POSTS } from '../constants/action-types';
export const fetchPost = () => {
    return (dispatch) => {
        return fetch("http://localhost:3000/api/v1/employees/1")
            .then(res => res.json())
            .then(json => dispatch({ type: FETCH_POSTS, data: json }))
            .catch(err => dispatch({ type: "ERROR", msg: "Unable to fetch post" }))
    }
}