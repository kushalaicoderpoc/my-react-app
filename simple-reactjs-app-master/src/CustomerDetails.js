import React, { useState } from 'react';

const CustomerDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Mock customer data
  const customer = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    organization: 'Globex Corp',
    jobProfile: 'Product Manager',
    additionalInfo: 'Interested in advanced analytics and data visualization solutions.',
  };

  return (
    <React.Fragment>
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '500px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '15px', color: '#333' }}>Customer Details</h2>
        <p style={{ margin: '5px 0' }}><strong>Name:</strong> {customer.name}</p>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> {customer.email}</p>

        {isExpanded && (
          <React.Fragment>
            <p style={{ margin: '5px 0' }}><strong>Organization:</strong> {customer.organization}</p>
            <p style={{ margin: '5px 0' }}><strong>Job Profile:</strong> {customer.jobProfile}</p>
            <p style={{ margin: '5px 0' }}><strong>Additional Info:</strong> {customer.additionalInfo}</p>
          </React.Fragment>
        )}

        <button
          onClick={toggleExpand}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            outline: 'none'
          }}
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
