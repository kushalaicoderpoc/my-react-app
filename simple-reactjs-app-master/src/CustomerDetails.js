import React, { useState } from 'react';

const CustomerDetails = ({ customer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Use provided customer data or fall back to placeholder data for demonstration
  const customerData = customer || {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '987-654-3210',
    organization: 'XYZ Corp',
    jobProfile: 'Project Manager',
    additionalInfo: 'Available for calls after 2 PM local time.'
  };

  return (
    <React.Fragment>
      <h2>Customer Details</h2>
      <p><strong>Name:</strong> {customerData.name}</p>
      <p><strong>Email:</strong> {customerData.email}</p>
      <p><strong>Phone:</strong> {customerData.phone}</p>

      <button onClick={toggleExpand} style={{ marginTop: '10px', marginBottom: '10px', padding: '8px 15px', cursor: 'pointer' }}>
        {isExpanded ? 'See Less' : 'See More'}
      </button>

      {isExpanded && (
        <React.Fragment>
          <p><strong>Organization:</strong> {customerData.organization}</p>
          <p><strong>Job Profile:</strong> {customerData.jobProfile}</p>
          <p><strong>Additional Info:</strong> {customerData.additionalInfo}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CustomerDetails;
