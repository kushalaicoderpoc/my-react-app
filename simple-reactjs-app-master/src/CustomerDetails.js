import React, { useState } from 'react';

function CustomerDetails() {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <React.Fragment>
      <h2>Customer Information</h2>
      <div>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> jane.doe@example.com</p>
        <p><strong>Account Status:</strong> Active</p>
      </div>

      <button onClick={toggleSeeMore} style={{ marginTop: '15px', padding: '8px 15px', cursor: 'pointer' }}>
        {showMore ? 'See Less' : 'See More'}
      </button>

      {showMore && (
        <React.Fragment>
          <h3 style={{ marginTop: '20px' }}>Additional Details</h3>
          <div>
            <p><strong>Organization:</strong> Global Enterprises Inc.</p>
            <p><strong>Job Profile:</strong> Solutions Architect</p>
            <p><strong>Additional Info:</strong> Leads cross-functional teams in developing scalable cloud solutions.</p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default CustomerDetails;
