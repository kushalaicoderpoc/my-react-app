import React, { useState } from 'react';

function CustomerDetails() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <React.Fragment>
      <h1>Customer Details</h1>

      {/* Basic Customer Information (always visible) */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h3>Basic Information</h3>
        <p><strong>Customer ID:</strong> CUST-001</p>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> jane.doe@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
      </div>

      {/* Conditional Additional Information Fields */}
      {showAdditionalInfo && (
        <React.Fragment>
          <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>Organization</h3>
            <p><strong>Company Name:</strong> Innovate Solutions Corp.</p>
            <p><strong>Department:</strong> Research & Development</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
          </div>

          <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>Job Profile</h3>
            <p><strong>Title:</strong> Lead Software Engineer</p>
            <p><strong>Role:</strong> Technical Lead</p>
            <p><strong>Experience:</strong> 10+ years</p>
          </div>

          <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3>Additional Info</h3>
            <p><strong>Notes:</strong> Key contact for new product initiatives. Prefers email communication.</p>
            <p><strong>Last Contacted:</strong> 2023-10-26</p>
          </div>
        </React.Fragment>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleAdditionalInfo}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px'
        }}
      >
        {showAdditionalInfo ? 'See less' : 'See more'}
      </button>
    </React.Fragment>
  );
}

export default CustomerDetails;