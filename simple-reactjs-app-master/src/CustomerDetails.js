import React, { useState } from 'react';

function CustomerDetails() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <React.Fragment>
      <h2>Customer Information</h2>
      <div>
        <p><strong>Customer ID:</strong> CUST-001</p>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> jane.doe@example.com</p>
      </div>

      {showAdditionalInfo && (
        <React.Fragment>
          <h3>Professional Details</h3>
          <div>
            <p><strong>Organization:</strong> Tech Innovations Inc.</p>
            <p><strong>Job Profile:</strong> Senior Product Manager</p>
            <p><strong>Additional Info:</strong> Leading cross-functional teams to deliver innovative software solutions.</p>
          </div>
        </React.Fragment>
      )}

      <button onClick={toggleAdditionalInfo}>
        {showAdditionalInfo ? 'See less' : 'See more'}
      </button>
    </React.Fragment>
  );
}

export default CustomerDetails;
