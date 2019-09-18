import { combineReducers } from "redux";
import configurationsReducer from "./configurations-reducer";
import pageReducer from "./page.reducer";
import applicationReducer from './applications.reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    operation: configurationsReducer,
    page: pageReducer,
    applications: applicationReducer,
    form: formReducer
})