import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null, // Initialize customerDetails to null
      showMore: false // New state to control visibility of additional info
    }
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
    axios.get(`assets/samplejson/customer${id}.json`)
      .then(response => {
        this.setState({customerDetails: response})
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
        this.setState({ customerDetails: null }); // Handle error case
      });
  };

  // Function to toggle the visibility of 'Organization', 'Job Profile', and 'Additional Info'
  toggleShowMore = () => {
    this.setState(prevState => ({
      showMore: !prevState.showMore
    }));
  }

  render() {
    if (!this.state.customerDetails) {
      return (<p>Loading Data</p>);
    }

    const { data } = this.state.customerDetails;
    const { showMore } = this.state;

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

            {showMore && (
              <React.Fragment>
                <p>Organization : {data.organization}</p>
                <p>Job Profile : {data.jobProfile}</p>
                <p>Additional Info : {data.additionalInfo}</p>
              </React.Fragment>
            )}

            <button onClick={this.toggleShowMore} className="btn btn-link mt-2">
              {showMore ? 'See less' : 'See more'}
            </button>

          </Panel.Body>
        </Panel>
      </div>
    )
  }
}
