import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <React.Fragment>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>

        {showMore && (
          <React.Fragment>
            <hr style={{ margin: '15px 0' }} />
            <p><strong>Organization:</strong> Tech Solutions Inc.</p>
            <p><strong>Job Profile:</strong> Senior Software Engineer</p>
            <p><strong>Additional Info:</strong> Key contact for new product integration. Has been a loyal customer for 5 years.</p>
          </React.Fragment>
        )}

        <button
          onClick={toggleSeeMore}
          style={{
            marginTop: '15px',
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
