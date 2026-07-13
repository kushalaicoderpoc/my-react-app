import React, { useState, useEffect } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

//This Component is a child Component of Customers Component
const CustomerDetails = (props) => {

  // State to store customer details fetched from the API
  const [customerDetails, setCustomerDetails] = useState(null);
  // State to manage the visibility of additional fields (See More/See Less toggle)
  const [showMore, setShowMore] = useState(false);

  // Function to fetch customer details based on the provided ID
  const getCustomerDetails = (id) => {
    axios.get(`assets/samplejson/customer${id}.json`)
      .then(response => {
        setCustomerDetails(response);
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
        // Optionally, you could set an error state here to display a message to the user
        setCustomerDetails(null); // Reset or set to an error object
      });
  };

  // useEffect hook replaces componentDidMount and componentDidUpdate
  // It runs the data fetching logic whenever props.val changes.
  useEffect(() => {
    getCustomerDetails(props.val);
  }, [props.val]); // Dependency array ensures effect runs only when props.val changes

  // Function to toggle the visibility of additional fields
  const toggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  // Display a loading message until customer details are fetched
  if (!customerDetails) {
    return <p>Loading Data</p>;
  }

  // Destructure data for cleaner access to customer properties
  const { data } = customerDetails;

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

          {/* Conditionally render additional fields based on the 'showMore' state */}
          {showMore && (
            <React.Fragment>
              <p>Organization : {data.organization}</p>
              <p>Job Profile : {data.jobProfile}</p>
              <p>Additional Info : {data.additionalInfo}</p>
            </React.Fragment>
          )}

          {/* Toggle button for See More/See Less */}
          <button
            onClick={toggleShowMore}
            style={{
              marginTop: '10px',
              padding: '8px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {showMore ? 'See Less' : 'See More'}
          </button>
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default CustomerDetails;
