import React, { useState } from 'react';

const CustomerDetails = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <React.Fragment>
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '25px',
        maxWidth: '500px',
        margin: '30px auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        backgroundColor: '#fff'
      }}>
        <h2 style={{
          fontSize: '24px',
          color: '#333',
          marginBottom: '20px',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '10px'
        }}>Customer Information</h2>

        <div style={{ marginBottom: '10px' }}>
          <strong style={{ minWidth: '120px', display: 'inline-block' }}>Name:</strong> John Doe
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong style={{ minWidth: '120px', display: 'inline-block' }}>Email:</strong> john.doe@example.com
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong style={{ minWidth: '120px', display: 'inline-block' }}>Phone:</strong> +1 (555) 123-4567
        </div>

        {showMoreDetails && (
          <React.Fragment>
            <div style={{
              borderTop: '1px solid #f0f0f0',
              marginTop: '20px',
              paddingTop: '20px'
            }}>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ minWidth: '120px', display: 'inline-block' }}>Organization:</strong> Global Innovations Inc.
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ minWidth: '120px', display: 'inline-block' }}>Job Profile:</strong> Lead Software Architect
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ minWidth: '120px', display: 'inline-block' }}>Additional Info:</strong> Spearheads the development of new AI-driven solutions.
              </div>
            </div>
          </React.Fragment>
        )}

        <button
          onClick={toggleDetails}
          style={{
            marginTop: '25px',
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'background-color 0.2s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          {showMoreDetails ? 'See Less' : 'See More'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerDetails;
