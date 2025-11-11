import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'your_supabase_url';
const supabaseAnonKey = 'your_supabase_anon_key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { customerDetails: null, error: null };
  }

  // Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  // Function which is called whenever the component is updated
  componentDidUpdate(prevProps) {
    // get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }

  // Function to Load the customer details data from JSON.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json')
      .then(response => {
        if (response.data) {
          this.setState({ customerDetails: response.data });
          this.saveCustomerDetailsToSupabase(response.data);
        } else {
          throw new Error('No data found');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  // Function to save customer details to Supabase
  async saveCustomerDetailsToSupabase(customer) {
    const { data, error } = await supabase
      .from('customers')
      .insert([customer]);

    if (error) {
      this.setState({ error: error.message });
    } else {
      console.log('Customer details saved successfully:', data);
    }
  }

  render() {
    if (this.state.error) {
      return <React.Fragment><p>Error: {this.state.error}</p></React.Fragment>;
    }
    if (!this.state.customerDetails) {
      return <React.Fragment><p>Loading Data</p></React.Fragment>;
    }
    return <div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.customerDetails.name}</p>
          <p>Email : {this.state.customerDetails.email}</p>
          <p>Phone : {this.state.customerDetails.phone}</p>
          <p>City : {this.state.customerDetails.city}</p>
          <p>State : {this.state.customerDetails.state}</p>
          <p>Country : {this.state.customerDetails.country}</p>
          <p>Organization : {this.state.customerDetails.organization}</p>
          <p>Job Profile : {this.state.customerDetails.jobProfile}</p>
          <p>Additional Info : {this.state.customerDetails.additionalInfo}</p>
        </Panel.Body>
      </Panel>
    </div>;
  }
}