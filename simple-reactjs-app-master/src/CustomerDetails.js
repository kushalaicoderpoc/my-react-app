import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  return (
    <React.Fragment>
      <div>
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone:</strong> 555-123-4567</p>

        {showMore && (
          <React.Fragment>
            <p><strong>Organization:</strong> Example Corp</p>
            <p><strong>Job Profile:</strong> Senior Software Engineer</p>
            <p><strong>Additional Info:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </React.Fragment>
        )}

        <button onClick={toggleShowMore}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
