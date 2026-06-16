import React, { useState, useEffect } from "react";
import Panel from "react-bootstrap/lib/Panel";
import axios from "axios";

const CustomerDetails = ({ val }) => {
  const [customerDetails, setCustomerDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Fetch customer data
  const getCustomerDetails = async (id) => {
    try {
      const response = await axios.get(
        `assets/samplejson/customer${id}.json`
      );
      setCustomerDetails(response);
      setShowMore(false); // reset dropdown when customer changes
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  // Load on mount + when val changes
  useEffect(() => {
    if (val) {
      getCustomerDetails(val);
    }
  }, [val]);

  if (!customerDetails) {
    return <p>Loading Data...</p>;
  }

  const data = customerDetails.data;

  return (
    <div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{data.name}</Panel.Title>
        </Panel.Heading>

        <Panel.Body>
          <p>Name : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>Phone : {data.phone}</p>
          <p>City : {data.city}</p>
          <p>State : {data.state}</p>
          <p>Country : {data.country}</p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            style={{
              marginTop: "10px",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            {showMore ? "See Less" : "See More"}
          </button>

          {/* Expandable Section */}
          {showMore && (
            <div style={{ marginTop: "10px" }}>
              <p>Organization : {data.organization}</p>
              <p>Job Profile : {data.jobProfile}</p>
              <p>Additional Info : {data.additionalInfo}</p>
            </div>
          )}
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default CustomerDetails;
