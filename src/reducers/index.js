import { combineReducers } from 'C:/Users/pallab/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import configurationsReducer from "./configurations-reducer";
import pageReducer from "./page.reducer";
import applicationReducer from './applications.reducer';

export default combineReducers({
    operation: configurationsReducer,
    page: pageReducer,
    applications: applicationReducer
})