import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize customerDetails
      showMoreInfo: false, // State to manage visibility of additional info
    };
    this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
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
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    });
  };

  // Toggles the visibility of additional information fields
  toggleMoreInfo() {
    this.setState(prevState => ({
      showMoreInfo: !prevState.showMoreInfo,
    }));
  }

  render() {
    if (!this.state.customerDetails || !this.state.customerDetails.data)
      return (<p>Loading Data</p>);

    const { data } = this.state.customerDetails; // Destructure data for easier access
    const { showMoreInfo } = this.state; // Get showMoreInfo from state

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

          {showMoreInfo && (
            <React.Fragment>
              <p>Organization : {data.organization}</p>
              <p>Job Profile : {data.jobProfile}</p>
              <p>Additional Info : {data.additionalInfo}</p>
            </React.Fragment>
          )}

          <button onClick={this.toggleMoreInfo} className="btn btn-link">
            {showMoreInfo ? 'See Less' : 'See More'}
          </button>
        </Panel.Body>
      </Panel>
    </div>)
  }
}