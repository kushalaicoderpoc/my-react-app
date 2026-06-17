import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <React.Fragment>
      <h2>Customer Details</h2>
      <div>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
      </div>

      <button onClick={toggleSeeMore}>
        {showMore ? 'See Less' : 'See More'}
      </button>

      {showMore && (
        <React.Fragment>
          <h3>Additional Information</h3>
          <p><strong>Organization:</strong> Tech Solutions Inc.</p>
          <p><strong>Job Profile:</strong> Senior Software Engineer</p>
          <p><strong>Additional Info:</strong> Prefers morning meetings, highly responsive to email.</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CustomerDetails;
