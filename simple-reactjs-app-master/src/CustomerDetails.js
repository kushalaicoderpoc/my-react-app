import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showMore: false,
      customerDetails: null
    };
    this.toggleShowMore = this.toggleShowMore.bind(this);
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

  toggleShowMore() {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  }

  render() {
    if (!this.state.customerDetails)
      return <p style={{ color: 'white' }}>Loading Data</p>;
    return ( 
      <div className="customerdetails" style={{ backgroundColor: '#ffcccb', padding: '20px', borderRadius: '8px', transition: 'background-color 0.3s ease' }}>
        <Panel bsStyle="info" className="centeralign" style={{ transition: 'box-shadow 0.3s ease' }}>
          <Panel.Heading>
            <Panel.Title componentClass="h3" style={{ color: '#77dd77' }}>{this.state.customerDetails.data.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p style={{ color: 'white' }}>Name : {this.state.customerDetails.data.name}</p>
            <p style={{ color: 'white' }}>Email : {this.state.customerDetails.data.email}</p>
            <p style={{ color: 'white' }}>Phone : {this.state.customerDetails.data.phone}</p>
            <p style={{ color: 'white' }}>City : {this.state.customerDetails.data.city}</p>
            <p style={{ color: 'white' }}>State : {this.state.customerDetails.data.state}</p>
            <p style={{ color: 'white' }}>Country : {this.state.customerDetails.data.country}</p>
            {this.state.showMore && <React.Fragment>
              <p style={{ color: 'white' }}>Organization : {this.state.customerDetails.data.organization}</p>
              <p style={{ color: 'white' }}>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
              <p style={{ color: 'white' }}>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
            </React.Fragment>}
            <button onClick={this.toggleShowMore} style={{ padding: '10px 15px', marginTop: '10px', border: 'none', backgroundColor: '#77dd77', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
              {this.state.showMore ? 'See Less' : 'See More'}
            </button>
          </Panel.Body>
        </Panel>
      </div>);
  }
}