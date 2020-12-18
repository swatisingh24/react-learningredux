import { Customer } from "../../models";

interface CrmSystemProps {
    customers?: Customer[];
    isLoading?: boolean;
    errorOccurred?: {
        status?: boolean;
        errorText?: string
    },
    getCustomers?: () => void;
};

export default CrmSystemProps;
