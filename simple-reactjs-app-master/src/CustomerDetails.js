import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize to null for better loading state management
      showMoreDetails: false // New state variable to control visibility of additional fields
    }
    // Bind the toggle method to the component instance
    this.toggleMoreDetails = this.toggleMoreDetails.bind(this);
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
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json')
      .then(response => {
        this.setState({customerDetails: response})
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
        // Optionally, handle error state, e.g., this.setState({ customerDetails: null, error: true });
      });
  };

  // Toggles the visibility of 'Organization', 'Job Profile', and 'Additional Info' fields
  toggleMoreDetails() {
    this.setState(prevState => ({
      showMoreDetails: !prevState.showMoreDetails
    }));
  }

  render() {
    const { customerDetails, showMoreDetails } = this.state;

    if (!customerDetails) {
      return (<p>Loading Data</p>);
    }

    // Destructure customer data for cleaner access
    const customerData = customerDetails.data;

    return (
    <div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{customerData.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {customerData.name}</p>
          <p>Email : {customerData.email}</p>
          <p>Phone : {customerData.phone}</p>
          <p>City : {customerData.city}</p>
          <p>State : {customerData.state}</p>
          <p>Country : {customerData.country}</p>

          {/* Conditional rendering for 'Organization', 'Job Profile', and 'Additional Info' */}
          {showMoreDetails && (
            <React.Fragment>
              <p>Organization : {customerData.organization}</p>
              <p>Job Profile : {customerData.jobProfile}</p>
              <p>Additional Info : {customerData.additionalInfo}</p>
            </React.Fragment>
          )}

          {/* Button to toggle the visibility of the additional fields */}
          <button onClick={this.toggleMoreDetails} className="btn btn-link mt-2">
            {showMoreDetails ? 'see less' : 'see more'}
          </button>

        </Panel.Body>
      </Panel>
    </div>)
  }
}
