import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { customerDetails: null, isEditing: false, editedDetails: {} };
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
      this.setState({ customerDetails: response.data, editedDetails: response.data });
    });
  }

  handleEdit = () => {
    this.setState({ isEditing: true });
  };
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      editedDetails: { ...prevState.editedDetails, [name]: value }
    }));
  };
  
  handleCancel = () => {
    this.setState({ isEditing: false, editedDetails: this.state.customerDetails });
  };
  
  handleSubmit = () => {
    // Here we can implement the submit logic like updating API
    this.setState({ isEditing: false, customerDetails: this.state.editedDetails });
  };

  render() {
    if (!this.state.customerDetails) {
      return (<p>Loading Data</p>);
    }
    return (
      <div className="customerdetails">
        <Panel bsStyle="info" className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{this.state.customerDetails.name}</Panel.Title>
            <button onClick={this.handleEdit} className="btn btn-primary pull-right">Edit</button>
          </Panel.Heading>
          <Panel.Body>
            {this.state.isEditing ? (
              <form>
                <div>
                  <label>Name:</label>
                  <input type="text" name="name" value={this.state.editedDetails.name} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" name="email" value={this.state.editedDetails.email} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="tel" name="phone" value={this.state.editedDetails.phone} onChange={this.handleChange} />
                </div>
                <div>
                  <label>City:</label>
                  <input type="text" name="city" value={this.state.editedDetails.city} onChange={this.handleChange} />
                </div>
                <div>
                  <label>State:</label>
                  <input type="text" name="state" value={this.state.editedDetails.state} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Country:</label>
                  <input type="text" name="country" value={this.state.editedDetails.country} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Organization:</label>
                  <input type="text" name="organization" value={this.state.editedDetails.organization} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Job Profile:</label>
                  <input type="text" name="jobProfile" value={this.state.editedDetails.jobProfile} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Additional Info:</label>
                  <input type="text" name="additionalInfo" value={this.state.editedDetails.additionalInfo} onChange={this.handleChange} />
                </div>
                <button type="button" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
                <button type="button" onClick={this.handleCancel} className="btn btn-danger">Cancel</button>
              </form>
            ) : (
              <React.Fragment>
                <p>Name : {this.state.customerDetails.name}</p>
                <p>Email : {this.state.customerDetails.email}</p>
                <p>Phone : {this.state.customerDetails.phone}</p>
                <p>City : {this.state.customerDetails.city}</p>
                <p>State : {this.state.customerDetails.state}</p>
                <p>Country : {this.state.customerDetails.country}</p>
                <p>Organization : {this.state.customerDetails.organization}</p>
                <p>Job Profile : {this.state.customerDetails.jobProfile}</p>
                <p>Additional Info : {this.state.customerDetails.additionalInfo}</p>
              </React.Fragment>
            )}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}