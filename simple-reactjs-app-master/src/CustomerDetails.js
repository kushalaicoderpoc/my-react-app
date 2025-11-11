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

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response});
    });
  }

  toggleShowMore = () => {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  };

  render() {
    if (!this.state.customerDetails)
      return (React.createElement('p', null, 'Loading Data'));
    return (React.createElement(React.Fragment, null,
      React.createElement('div', { className: 'customerdetails' },
        React.createElement(Panel, { bsStyle: 'info', className: 'centeralign' },
          React.createElement(Panel.Heading, null,
            React.createElement(Panel.Title, { componentClass: 'h3' }, this.state.customerDetails.data.name)
          ),
          React.createElement(Panel.Body, null,
            React.createElement('p', null, 'Name : ', this.state.customerDetails.data.name),
            React.createElement('p', null, 'Email : ', this.state.customerDetails.data.email),
            React.createElement('p', null, 'Phone : ', this.state.customerDetails.data.phone),
            React.createElement('p', null, 'City : ', this.state.customerDetails.data.city),
            React.createElement('p', null, 'State : ', this.state.customerDetails.data.state),
            React.createElement('p', null, 'Country : ', this.state.customerDetails.data.country),
            this.state.showMore && (
              React.createElement(React.Fragment, null,
                React.createElement('p', null, 'Organization : ', this.state.customerDetails.data.organization),
                React.createElement('p', null, 'Job Profile : ', this.state.customerDetails.data.jobProfile),
                React.createElement('p', null, 'Additional Info : ', this.state.customerDetails.data.additionalInfo)
              )
            ),
            React.createElement('button', { onClick: this.toggleShowMore, style: { backgroundColor: 'green', color: 'white' } }, this.state.showMore ? 'See Less' : 'View Details')
          )
        )
      )
    ));
  }
}