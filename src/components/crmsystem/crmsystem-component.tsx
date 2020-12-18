import React from 'react';
import { connect } from 'react-redux';
import { CustomerService } from '../../services';
import CrmSystemProps from './crmsystem-props';

class CrmSystemComponent extends React.Component<CrmSystemProps> {
    componentDidMount() {
        if (typeof this.props.getCustomers === 'function') {
            this.props.getCustomers();
        }
    }

    render() {
        let markup = (<div></div>);

        if (this.props.isLoading !== undefined && this.props.isLoading === true) {
            markup = (
                <div>Loading ... Please Wait ...</div>
            )
        }

        if (this.props.errorOccurred !== undefined &&
            this.props.errorOccurred.status === true) {
            markup = (
                <>
                    <div>Error Occurred, Please Try again later ...</div>
                    <br />
                    <div>Error Text: {this.props.errorOccurred.errorText}</div>
                </>
            )
        }

        if (this.props.customers !== undefined) {
            markup = (
                <table>
                    <thead>
                        <tr>
                            <th>Customer #</th>
                            <th>Customer Name</th>
                            <th>Customer Address</th>
                            <th>Credit Limit</th>
                            <th>Active Status</th>
                            <th>Remarks</th>
                            <th>Photo Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.customers.map(
                                customerRecord => (
                                    <tr key={customerRecord.id}>
                                        <td>{customerRecord.id}</td>
                                        <td>{customerRecord.name}</td>
                                        <td>{customerRecord.address}</td>
                                        <td>{customerRecord.credit}</td>
                                        <td>{customerRecord.status}</td>
                                        <td>{customerRecord.remarks}</td>
                                        <td>{customerRecord.photourl}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            )
        }

        return markup;
    }
}

const mapStateToProps = (state: any = {}) => {
    return {
        customers: state.fetchCustomers,
        isLoading: state.isLoading,
        errorOccurred: state.errorOccurred
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCustomers: () => dispatch(CustomerService.fetchCustomers())
    };
};

const ConnectedCrmSystemComponent =
    connect(mapStateToProps, mapDispatchToProps)(CrmSystemComponent);

export default ConnectedCrmSystemComponent;
