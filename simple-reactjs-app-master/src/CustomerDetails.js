import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { editing: false, customerDetails: {} };
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
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({ customerDetails: response.data });
    });
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      customerDetails: { ...prevState.customerDetails, [name]: value }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle saving the details
    this.setState({ editing: false });
  };

  handleCancel = () => {
    this.getCustomerDetails(this.props.val);
    this.setState({ editing: false });
  };

  render() {
    const { editing, customerDetails } = this.state;
    return <React.Fragment>{!customerDetails ? (
      <p>Loading Data</p>
    ) : (
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customerDetails.name}</Panel.Title>
            <button onClick={this.handleEdit} style={{ float: 'right' }}>Edit</button>
          </Panel.Heading>
          <Panel.Body>{editing ? (
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={customerDetails.name} onChange={this.handleChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={customerDetails.email} onChange={this.handleChange} />
              </div>
              <div>
                <label>Phone:</label>
                <input type="tel" name="phone" value={customerDetails.phone} onChange={this.handleChange} />
              </div>
              <div>
                <label>City:</label>
                <input type="text" name="city" value={customerDetails.city} onChange={this.handleChange} />
              </div>
              <div>
                <label>State:</label>
                <input type="text" name="state" value={customerDetails.state} onChange={this.handleChange} />
              </div>
              <div>
                <label>Country:</label>
                <input type="text" name="country" value={customerDetails.country} onChange={this.handleChange} />
              </div>
              <div>
                <label>Organization:</label>
                <input type="text" name="organization" value={customerDetails.organization} onChange={this.handleChange} />
              </div>
              <div>
                <label>Job Profile:</label>
                <input type="text" name="jobProfile" value={customerDetails.jobProfile} onChange={this.handleChange} />
              </div>
              <div>
                <label>Additional Info:</label>
                <input type="text" name="additionalInfo" value={customerDetails.additionalInfo} onChange={this.handleChange} />
              </div>
              <button type="submit" style={{ backgroundColor: '#5cb85c', color: 'white' }}>Submit</button>
              <button type="button" onClick={this.handleCancel} style={{ backgroundColor: '#d9534f', color: 'white' }}>Cancel</button>
            </form>
          ) : (
            <div>
              <p>Name : {customerDetails.name}</p>
              <p>Email : {customerDetails.email}</p>
              <p>Phone : {customerDetails.phone}</p>
              <p>City : {customerDetails.city}</p>
              <p>State : {customerDetails.state}</p>
              <p>Country : {customerDetails.country}</p>
              <p>Organization : {customerDetails.organization}</p>
              <p>Job Profile : {customerDetails.jobProfile}</p>
              <p>Additional Info : {customerDetails.additionalInfo}</p>
            </div>
          )}
          </Panel.Body>
        </Panel>
      </div>
    )}</React.Fragment>;
  }
}