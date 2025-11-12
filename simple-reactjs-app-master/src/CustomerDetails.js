import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';
import './CustomerDetails.css';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showMore: false 
    };
    this.toggleShowMore = this.toggleShowMore.bind(this);
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

  toggleShowMore() {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  }

  render() {
    if (!this.state.customerDetails)
      return <p className="loading-text">Loading Data</p>;
    return ( 
      <div className="customerdetails" style={{ backgroundColor: '#ffcccb', transition: 'background-color 0.3s' }}>
        <Panel bsStyle="info" className="centeralign panel-background" style={{ backgroundColor: '#ffcccb', borderColor: '#b2e8b2' }}>
          <Panel.Heading>
            <Panel.Title className="heading-text" componentClass="h3" style={{ color: '#b2e8b2' }}>{this.state.customerDetails.data.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p className="field-text" style={{ color: '#b2e8b2' }}>Name : {this.state.customerDetails.data.name}</p>
            <p className="field-text" style={{ color: '#b2e8b2' }}>Email : {this.state.customerDetails.data.email}</p>
            <p className="field-text" style={{ color: '#b2e8b2' }}>Phone : {this.state.customerDetails.data.phone}</p>
            <p className="field-text" style={{ color: '#b2e8b2' }}>City : {this.state.customerDetails.data.city}</p>
            <p className="field-text" style={{ color: '#b2e8b2' }}>State : {this.state.customerDetails.data.state}</p>
            <p className="field-text" style={{ color: '#b2e8b2' }}>Country : {this.state.customerDetails.data.country}</p>
            {this.state.showMore && <React.Fragment>
              <p className="field-text" style={{ color: '#b2e8b2' }}>Organization : {this.state.customerDetails.data.organization}</p>
              <p className="field-text" style={{ color: '#b2e8b2' }}>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
              <p className="field-text" style={{ color: '#b2e8b2' }}>Additional Info : {this.state.customerDetails.data.additionalInfo}</p>
            </React.Fragment>}
            <button className="toggle-button" onClick={this.toggleShowMore} style={{ transition: 'background-color 0.3s', backgroundColor: '#ffb3b3', cursor: 'pointer' }}>
              {this.state.showMore ? 'See Less' : 'See More'}
            </button>
          </Panel.Body>
        </Panel>
      </div>);
  }
}