import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMore, setShowMore] = useState(false);

  // Mock customer data for demonstration purposes
  const customerData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    organization: 'Global Tech Solutions',
    jobProfile: 'Senior Product Manager',
    additionalInfo: 'Successfully led the Q4 product launch and managed a cross-functional team of 10 engineers and designers.'
  };

  const toggleSeeMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <React.Fragment>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> {customerData.name}</p>
        <p><strong>Email:</strong> {customerData.email}</p>

        {showMore && (
          <React.Fragment>
            <p><strong>Organization:</strong> {customerData.organization}</p>
            <p><strong>Job Profile:</strong> {customerData.jobProfile}</p>
            <p><strong>Additional Info:</strong> {customerData.additionalInfo}</p>
          </React.Fragment>
        )}

        <button
          onClick={toggleSeeMore}
          style={{
            marginTop: '10px',
            padding: '8px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
