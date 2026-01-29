import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize customerDetails to null
      showMoreInfo: false // New state variable to control visibility of additional info
    }
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenever the component is updated
  componentDidUpdate(prevProps) {
    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
      // Reset showMoreInfo when customer changes
      this.setState({ showMoreInfo: false });
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    }).catch(error => {
      console.error("Error fetching customer details for ID: " + id, error);
      this.setState({ customerDetails: null }); // Set customerDetails to null on error
    });
  };

  // Function to toggle the visibility of additional info fields
  toggleMoreInfo = () => {
    this.setState(prevState => ({
      showMoreInfo: !prevState.showMoreInfo
    }));
  };

  render() {
    if (!this.state.customerDetails) {
      return (<p>Loading Data</p>);
    }

    const { data } = this.state.customerDetails;
    const { showMoreInfo } = this.state;

    return (
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{data.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Phone : {data.phone}</p>
            <p>City : {data.city}</p>
            <p>State : {data.state}</p>
            <p>Country : {data.country}</p>

            {/* Conditionally render Organization, Job Profile, and Additional Info */}
            {showMoreInfo && (
              <React.Fragment>
                <p>Organization : {data.organization}</p>
                <p>Job Profile : {data.jobProfile}</p>
                <p>Additional Info : {data.additionalInfo}</p>
              </React.Fragment>
            )}

            {/* Button to toggle visibility */}
            <button onClick={this.toggleMoreInfo} className="btn btn-link">
              {showMoreInfo ? 'see less' : 'see more'}
            </button>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
