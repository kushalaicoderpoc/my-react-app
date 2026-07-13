import React, { useState, useEffect } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

export default function CustomerDetails({ val }) {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const getCustomerDetails = (id) => {
    axios.get(`assets/samplejson/customer${id}.json`)
      .then(response => {
        setCustomerDetails(response);
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
        setCustomerDetails(null); // Reset or handle error state
      });
  };

  // useEffect combines componentDidMount and componentDidUpdate logic
  useEffect(() => {
    if (val) {
      getCustomerDetails(val);
    }
  }, [val]); // Re-run effect only if 'val' prop changes

  if (!customerDetails) {
    return <p>Loading Data</p>;
  }

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

          {showMore && (
            <React.Fragment>
              <p>Organization : {customerDetails.data.organization}</p>
              <p>Job Profile : {customerDetails.data.jobProfile}</p>
              <p>Additional Info : {customerDetails.data.additionalInfo}</p>
            </React.Fragment>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              marginTop: '15px',
              padding: '8px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
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
}
