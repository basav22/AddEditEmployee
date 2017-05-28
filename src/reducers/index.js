import { combineReducers } from 'redux';

import employeeListReducer from './reducer-employee-list.js';

const rootReducer = combineReducers({
    employeeList: employeeListReducer
});

export default rootReducer;
