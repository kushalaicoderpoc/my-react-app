import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { showMore: false, customerDetails: null };
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  //Function which is called whenever the component is updated
  componentDidUpdate(prevProps) {
    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }

  //Function to Load the customer details data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({ customerDetails: response });
    });
  };

  toggleDetails = () => {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  };

  render() {
    if (!this.state.customerDetails) return <React.Fragment><p>Loading Data</p></React.Fragment>;
    return <div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.customerDetails.data.name}</p>
          <p>Email : {this.state.customerDetails.data.email}</p>
          <p>Phone : {this.state.customerDetails.data.phone}</p>
          <p>City : {this.state.customerDetails.data.city}</p>
          <p>State : {this.state.customerDetails.data.state}</p>
          <p>Country : {this.state.customerDetails.data.country}</p>
          {this.state.showMore && (
            <React.Fragment>
              <p>Organization : {this.state.customerDetails.data.organization}</p>
              <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
              <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
            </React.Fragment>
          )}
          <button onClick={this.toggleDetails}>{this.state.showMore ? 'See Less' : 'See More'}</button>
        </Panel.Body>
      </Panel>
    </div>;
  }
}