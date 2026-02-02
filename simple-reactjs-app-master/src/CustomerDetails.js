import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null,
      showMoreInfo: false // New state variable to control visibility
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
      this.getCustomerDetails(this.props.val)
      // Reset showMoreInfo when the customer changes
      if (this.state.showMoreInfo) {
        this.setState({ showMoreInfo: false });
      }
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  // Function to toggle the visibility of additional information fields
  toggleMoreInfo = () => {
    this.setState(prevState => ({
      showMoreInfo: !prevState.showMoreInfo
    }));
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)

    const { customerDetails, showMoreInfo } = this.state;
    const customerData = customerDetails.data; // Destructure for cleaner access

    return (<div className="customerdetails">
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

          <button onClick={this.toggleMoreInfo} className="btn btn-link">
            {showMoreInfo ? 'see less' : 'see more'}
          </button>

          {showMoreInfo && (
            <React.Fragment>
              <p>Organization : {customerData.organization}</p>
              <p>Job Profile : {customerData.jobProfile}</p>
              <p>Additional Info : {customerData.additionalInfo}</p>
            </React.Fragment>
          )}
        </Panel.Body>
      </Panel>
    </div>)
  }
}