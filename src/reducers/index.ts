import { CustomerReducers } from "./customer-reducers";
import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
    fetchCustomers: CustomerReducers.fetchCustomersReducer,
    isLoading: CustomerReducers.isLoadingReducer,
    errorOccurred: CustomerReducers.errorOccurredReducer
});

export default combinedReducers;
