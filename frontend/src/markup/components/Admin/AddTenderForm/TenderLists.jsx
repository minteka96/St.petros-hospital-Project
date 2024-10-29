import React, { useState, useEffect } from "react"; // Added useEffect for fetching data
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./TenderList.css";

// Sample tender data
const sampleTenders = [
  {
    tenderNo: "TMC-MARP-INSUREP-280824",
    title: "Insurance corporate partnership with Thomson Medical Centre",
    openingDate: "28 Aug 2024, 2:00 am +01:00 UTC",
    closingDate: "11 Sep 2024, 4:00 am +01:00 UTC",
    status: "Tender Closed",
  },
  {
    tenderNo: "TMC-UCC-MGMSVRS-050724",
    title: "Provision RFP - Request for Proposal for Managed Service Provider",
    openingDate: "05 Jul 2024, 2:00 am +01:00 UTC",
    closingDate: "18 Jul 2024, 4:00 am +01:00 UTC",
    status: "Tender Closed",
  },
  {
    tenderNo: "TMC-UCC-MGMSVRS-050767",
    title: "Provision RFP - Request for Proposal for Managed Service Provider",
    openingDate: "05 Aug 2024, 2:00 am +01:00 UTC",
    closingDate: "18 Sep 2024, 4:00 am +01:00 UTC",
    status: "Tender Closed",
  },
  {
    tenderNo: "TMC-UCC-MGMSVRS-050798",
    title: "Provision RFP - Request for Proposal for Managed Service Provider",
    openingDate: "25 Aug 2024, 2:00 am +01:00 UTC",
    closingDate: "30 Sep 2024, 4:00 am +01:00 UTC",
    status: "Tender Closed",
  },
  {
    tenderNo: "TMC-UCC-MGMSVRS-0577",
    title: "Provision RFP - Request for Proposal for Managed Service Provider",
    openingDate: "12 Aug 2024, 2:00 am +01:00 UTC",
    closingDate: "28 Sep 2024, 4:00 am +01:00 UTC",
    status: "Tender Opened",
  },
  {
    tenderNo: "TMC-UCC-MGMSVRS-0578", // Changed the duplicate tender number
    title: "Provision RFP - Request for Proposal for Managed Service Provider",
    openingDate: "12 Aug 2024, 2:00 am +01:00 UTC",
    closingDate: "28 Sep 2024, 4:00 am +01:00 UTC",
    status: "Tender Opened",
  },
];

const TenderList = () => {
  const [tenders, setTenders] = useState(sampleTenders); // Initialized with sample data
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  // useEffect to fetch tender data (currently using sample data)
  useEffect(() => {
    const fetchTenders = async () => {
      setLoading(true);
      try {
        // Simulate an API call with a timeout
        // const response = await fetch('/api/tenders'); // Uncomment for real API
        // const data = await response.json(); // Uncomment for real API
        // setTenders(data); // Uncomment for real API

        // Simulate successful data fetching
        setTenders(sampleTenders);
      } catch (err) {
        setError("Failed to load tenders");
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  // Filtering the tenders based on the selected filter
  const filteredTenders = tenders.filter((tender) => {
    if (filter === "All") return true;
    if (filter === "Open") return tender.status === "Tender Opened";
    if (filter === "Closed") return tender.status === "Tender Closed";
    return false;
  });

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>{error}</div>;

  return (
    <div className="tender-list-container">
      <div className="filter-options">
        {["All", "Open", "Closed"].map((status) => (
          <button
            key={status}
            className={`filter-btn ${filter === status ? "active" : ""}`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <table className="tender-table">
        <thead>
          <tr>
            <th>Tender No.</th>
            <th>Tender Title</th>
            <th>Opening Date & Time</th>
            <th>Closing Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenders.map((tender, index) => (
            <tr key={index}>
              <td>{tender.tenderNo}</td>
              <td>
                {tender.title}
                <br />

                <Link to={`/all-tender-form-details/${tender.tenderNo}`}>
                  More Details &rarr;
                </Link>

                {/* <Link to={`/tender-list/${tender.tenderNo}`}>
                  More Details &rarr;
                </Link> */}
              </td>
              <td>{tender.openingDate}</td>
              <td>{tender.closingDate}</td>
              <td>{tender.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenderList;
