import React, { Component } from "react";
import Panel from "react-bootstrap/lib/Panel";
import axios from "axios";

export default class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerDetails: null,
      showMore: false,
    };
  }

  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }

  getCustomerDetails(id) {
    axios
      .get(`assets/samplejson/customer${id}.json`)
      .then((response) => {
        this.setState({ customerDetails: response, showMore: false });
      })
      .catch((err) => console.error(err));
  }

  toggleShowMore = () => {
    this.setState((prev) => ({ showMore: !prev.showMore }));
  };

  render() {
    const { customerDetails, showMore } = this.state;

    if (!customerDetails) return <p>Loading Data</p>;

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

            <button
              onClick={this.toggleShowMore}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              {showMore ? "See Less" : "See More"}
            </button>

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
  }
}
