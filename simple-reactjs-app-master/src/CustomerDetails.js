import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize customerDetails to null
      showMoreDetails: false // New state variable to control visibility of additional fields
    };
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
      // Reset showMoreDetails when the customer selection changes
      this.setState({ showMoreDetails: false });
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response});
    });
  }

  // Function to toggle the visibility of 'Organization', 'Job Profile', and 'Additional Info' fields
  toggleMoreDetails = () => {
    this.setState(prevState => ({
      showMoreDetails: !prevState.showMoreDetails
    }));
  };

  render() {
    const { customerDetails, showMoreDetails } = this.state;

    if (!customerDetails) {
      return (<p>Loading Data</p>);
    }

    return (
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customerDetails.data.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Name : {customerDetails.data.name}</p>
            <p>Email : {customerDetails.data.email}</p>
            <p>Phone : {customerDetails.data.phone}</p>
            <p>City : {customerDetails.data.city}</p>
            <p>State : {customerDetails.data.state}</p>
            <p>Country : {customerDetails.data.country}</p>

            {/* Conditionally render additional fields based on showMoreDetails state */}
            {showMoreDetails && (
              <React.Fragment>
                <p>Organization : {customerDetails.data.organization}</p>
                <p>Job Profile : {customerDetails.data.jobProfile}</p>
                <p>Additional Info : {customerDetails.data.additionalInfo}</p>
              </React.Fragment>
            )}

            {/* Button to toggle the visibility of additional fields */}
            <button onClick={this.toggleMoreDetails} className="btn btn-default btn-sm mt-2">
              {showMoreDetails ? 'See less' : 'See more'}
            </button>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
