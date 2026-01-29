import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize customerDetails to null
      showMoreDetails: false // New state to control visibility of additional fields
    }
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {
    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
      // Reset showMoreDetails when a new customer is selected
      if (this.state.showMoreDetails) {
        this.setState({ showMoreDetails: false });
      }
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
    .catch(error => {
      console.error("Error fetching customer details:", error);
      this.setState({ customerDetails: null }); // Clear details on error
    });
  };

  // Toggle function for 'see more' / 'see less' button
  toggleMoreDetails = () => {
    this.setState(prevState => ({
      showMoreDetails: !prevState.showMoreDetails
    }));
  };

  render() {
    const { customerDetails, showMoreDetails } = this.state;

    if (!customerDetails) {
      return (<p>Loading Data...</p>);
    }

    const customer = customerDetails.data; // Access data for cleaner rendering

    return (
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Name : {customer.name}</p>
            <p>Email : {customer.email}</p>
            <p>Phone : {customer.phone}</p>
            <p>City : {customer.city}</p>
            <p>State : {customer.state}</p>
            <p>Country : {customer.country}</p>

            {showMoreDetails && (
              <React.Fragment>
                <p>Organization : {customer.organization}</p>
                <p>Job Profile : {customer.jobProfile}</p>
                <p>Additional Info : {customer.additionalInfo}</p>
              </React.Fragment>
            )}

            <button onClick={this.toggleMoreDetails} className="btn btn-default btn-sm mt-2">
              {showMoreDetails ? 'see less' : 'see more'}
            </button>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
