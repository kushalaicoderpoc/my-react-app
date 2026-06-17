import React, { useState } from 'react';

const CustomerDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="customer-details-container">
      <h2>Customer Information</h2>
      <p><strong>Name:</strong> Jane Doe</p>
      <p><strong>Email:</strong> jane.doe@example.com</p>

      {isExpanded && (
        <React.Fragment>
          <p><strong>Organization:</strong> Tech Solutions Inc.</p>
          <p><strong>Job Profile:</strong> Lead Developer</p>
          <p><strong>Additional Info:</strong> Specialized in full-stack web development with a focus on React and Node.js.</p>
        </React.Fragment>
      )}

      <button onClick={toggleExpand}>
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default CustomerDetails;
