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
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </div>

      {showMore && (
        <React.Fragment>
          <div>
            <p><strong>Organization:</strong> Example Corp</p>
            <p><strong>Job Profile:</strong> Senior Software Engineer</p>
            <p><strong>Additional Info:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </React.Fragment>
      )}

      <button onClick={toggleSeeMore}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </React.Fragment>
  );
};

export default CustomerDetails;
