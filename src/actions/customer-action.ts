import CustomerActionTypes from "../action-types/customer-action-types";
import { Customer } from "../models";

interface CustomerAction {
    type?: CustomerActionTypes;
    customers?: Customer[];
    isLoading?: boolean;
    errorOccurred?: {
        status?: boolean;
        error?: string
    };
}

export default CustomerAction;
