import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleToggleClick = () => {
    setShowMoreDetails(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>

        {showMoreDetails && (
          <React.Fragment>
            <hr />
            <p><strong>Organization:</strong> Tech Solutions Inc.</p>
            <p><strong>Job Profile:</strong> Senior Software Engineer</p>
            <p><strong>Additional Info:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </React.Fragment>
        )}

        <button
          onClick={handleToggleClick}
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
          {showMoreDetails ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
