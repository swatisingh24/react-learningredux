import CustomerActionTypes from "../action-types/customer-action-types";
import { CustomerAction } from "../actions";
import { Customer } from "../models";

const fetchCustomersReducer = (state: Customer[] = [], action: CustomerAction) => {
    let nextState = state;

    if (action?.type === CustomerActionTypes.FetchCustomers) {
        if (action.customers) {
            nextState = [...state, ...action?.customers];
        }
    }

    return nextState;
};

const isLoadingReducer = (state: boolean = false, action: CustomerAction) => {
    let nextState = state;

    if (action?.type === CustomerActionTypes.IsLoading) {
        if (action.isLoading !== undefined) {
            nextState = action.isLoading
        }
    }

    return nextState;
};

const errorOccurredReducer = (state: { status?: boolean, error?: string } = {}, action: CustomerAction) => {
    let nextState = state;

    if (action?.type === CustomerActionTypes.ErrorOccurred) {
        if (action?.errorOccurred) {
            nextState = {
                status: action.errorOccurred.status,
                error: action.errorOccurred.error
            };
        }
    }

    return nextState;
};

const CustomerReducers = {
    fetchCustomersReducer,
    isLoadingReducer,
    errorOccurredReducer
};

export {
    CustomerReducers
};
