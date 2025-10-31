import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      customerDetails: null
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
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response});
    });
  };

  toggleDetails = () => {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  };

  render() {
    const { customerDetails, showMore } = this.state;
    if (!customerDetails) return (<p>Loading Data</p>);
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
            <React.Fragment>
              {showMore && (
                <>
                  <p>Organization : {customerDetails.data.organization}</p>
                  <p>Job Profile : {customerDetails.data.jobProfile}</p>
                  <p>Additional Info : {customerDetails.data.additionalInfo}</p>
                </>
              )}
              <button onClick={this.toggleDetails} aria-expanded={showMore}>
                {showMore ? 'See Less' : 'See More'}
              </button>
            </React.Fragment>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}