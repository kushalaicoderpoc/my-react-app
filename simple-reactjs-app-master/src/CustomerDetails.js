import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null,
      isEditing: false,
      updatedDetails: {}
    };
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
      this.setState({
        customerDetails: response,
        updatedDetails: response.data
      });
    });
  }

  handleEditToggle = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      updatedDetails: { ...prevState.updatedDetails, [name]: value }
    }));
  };

  handleSubmit = () => {
    // Here you can add the logic to submit the updated details, e.g., an API call.
    this.setState({ isEditing: false, customerDetails: { data: this.state.updatedDetails } });
  };

  render() {
    if (!this.state.customerDetails)
      return <p>Loading Data</p>;

    return <React.Fragment>
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
            <button onClick={this.handleEditToggle} style={{ float: 'right' }}>Edit</button>
          </Panel.Heading>
          <Panel.Body>
            {this.state.isEditing ? (
              <form>
                <p>Name: <input name="name" value={this.state.updatedDetails.name} onChange={this.handleChange} /></p>
                <p>Email: <input name="email" value={this.state.updatedDetails.email} onChange={this.handleChange} /></p>
                <p>Phone: <input name="phone" value={this.state.updatedDetails.phone} onChange={this.handleChange} /></p>
                <p>City: <input name="city" value={this.state.updatedDetails.city} onChange={this.handleChange} /></p>
                <p>State: <input name="state" value={this.state.updatedDetails.state} onChange={this.handleChange} /></p>
                <p>Country: <input name="country" value={this.state.updatedDetails.country} onChange={this.handleChange} /></p>
                <p>Organization: <input name="organization" value={this.state.updatedDetails.organization} onChange={this.handleChange} /></p>
                <p>Job Profile: <input name="jobProfile" value={this.state.updatedDetails.jobProfile} onChange={this.handleChange} /></p>
                <p>Additional Info: <input name="additionalInfo" value={this.state.updatedDetails.additionalInfo} onChange={this.handleChange} /></p>
                <button type="button" onClick={this.handleSubmit}>Submit</button>
                <button type="button" onClick={this.handleEditToggle}>Cancel</button>
              </form>
            ) : (
              <React.Fragment>
                <p>Name : {this.state.customerDetails.data.name}</p>
                <p>Email : {this.state.customerDetails.data.email}</p>
                <p>Phone : {this.state.customerDetails.data.phone}</p>
                <p>City : {this.state.customerDetails.data.city}</p>
                <p>State : {this.state.customerDetails.data.state}</p>
                <p>Country : {this.state.customerDetails.data.country}</p>
                <p>Organization : {this.state.customerDetails.data.organization}</p>
                <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
                <p>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
              </React.Fragment>
            )}
          </Panel.Body>
        </Panel>
      </div>
    </React.Fragment>;
  }
}