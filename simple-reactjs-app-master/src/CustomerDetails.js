import React, { useState } from 'react';

function CustomerDetails() {
  const [showMoreFields, setShowMoreFields] = useState(false);

  const toggleMoreFields = () => {
    setShowMoreFields(prev => !prev);
  };

  // Assuming some basic customer data for demonstration
  const customer = {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "987-654-3210",
    organization: "Innovate Solutions Inc.",
    jobProfile: "Senior Product Manager",
    additionalInfo: "Follow up in Q3 for project XYZ." 
  };

  return (
    <React.Fragment>
      <div>
        <h1>Customer Details</h1>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>

        {showMoreFields && (
          <React.Fragment>
            <p><strong>Organization:</strong> {customer.organization}</p>
            <p><strong>Job Profile:</strong> {customer.jobProfile}</p>
            <p><strong>Additional Info:</strong> {customer.additionalInfo}</p>
          </React.Fragment>
        )}

        <button onClick={toggleMoreFields}>
          {showMoreFields ? 'See less' : 'See more'}
        </button>
      </div>
    </React.Fragment>
  );
}

export default CustomerDetails;
