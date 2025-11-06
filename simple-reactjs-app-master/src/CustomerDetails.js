import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

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
      this.setState({customerDetails: response});
    });
  };

  toggleMoreInfo = () => {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>);

    const { data } = this.state.customerDetails;
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>Phone : {data.phone}</p>
          <React.Fragment>
            <button onClick={this.toggleMoreInfo}>{this.state.showMore ? 'See Less' : 'See More'}</button>
            {this.state.showMore && (
              <React.Fragment>
                <p>City : {data.city}</p>
                <p>State : {data.state}</p>
                <p>Country : {data.country}</p>
                <p>Organization : {data.organization}</p>
                <p>Job Profile : {data.jobProfile}</p>
                <p>Additional Info : {data.additionalInfo}</p>
              </React.Fragment>
            )}
          </React.Fragment>
        </Panel.Body>
      </Panel>
    </div>);
  }
}