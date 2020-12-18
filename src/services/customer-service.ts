import 'whatwg-fetch';
import { CustomerActionCreator } from '../action-creators';

const DEFAULT_CUSTOMER_SERVICE_URL = "https://5f5072742b5a260016e8b96d.mockapi.io/customerprofiles";

const CustomerService = {
    fetchCustomers: () => {
        return (dispatch: any) => {
            const requestUrl = process.env.REACT_APP_CUSTOMER_SERVICE_URL || DEFAULT_CUSTOMER_SERVICE_URL;

            dispatch(CustomerActionCreator.isLoading(true));

            fetch(requestUrl)
                .then(response => {
                    if (!response.ok) {
                        dispatch(CustomerActionCreator.errorOccurred({
                            status: true,
                            error: response.statusText
                        }));

                        return;
                    }

                    return response;
                })
                .then(response => response?.json())
                .then((customers: any) => {
                    dispatch(CustomerActionCreator.fetchCustomers(customers));
                })
                .finally(() => dispatch(CustomerActionCreator.isLoading(false)));
        };
    }
};

export default CustomerService;
