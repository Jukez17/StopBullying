import { combineReducers } from 'redux';
import ReportFormReducer from './ReportFormReducer';

export default combineReducers({
    reportForm: ReportFormReducer,
})