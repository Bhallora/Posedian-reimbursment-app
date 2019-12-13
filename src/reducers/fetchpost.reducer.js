import { FETCH_POST } from '../constants/action-types';
const initialState = {
    data: null,
    error: ""
}
const fetchpostReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_POST:
            return { ...state, data: action.data }
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}
export default fetchpostReducer;