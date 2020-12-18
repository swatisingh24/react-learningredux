import CustomerActionTypes from "../action-types/customer-action-types";
import { CustomerAction } from "../actions";
import { Customer } from "../models";

const CustomerActionCreator = {
    fetchCustomers: (customers: Customer[]): CustomerAction => {
        return {
            type: CustomerActionTypes.FetchCustomers,
            customers: customers
        };
    },
    isLoading: (loadingStatus: boolean): CustomerAction => {
        return {
            type: CustomerActionTypes.IsLoading,
            isLoading: loadingStatus
        };
    },
    errorOccurred: (errorInfo: { status?: boolean, error?: string }): CustomerAction => {
        return {
            type: CustomerActionTypes.ErrorOccurred,
            errorOccurred: {
                status: errorInfo.status,
                error: errorInfo.error
            }
        };
    }
};

export default CustomerActionCreator;