import React, {
  Component,
  useState,
  setState,
  useEffect,
  setData,
} from "react";
import { Link } from "react-router-dom";
import { Table, Toast, ToastBody, ToastHeader, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import "./businessmain.css";

const BusinessMain = () => {
  // Business URL
  let businessInfoUrl = "/react-backend/displayBusinessInfo.php";
  // Patron URL
  let checkinUrl = "/react-backend/displayCheckIn.php";

  // Checkin Data from Patron Table. Named 'rows' so it works with MDBTable. TO DO: Rename it later so fetch call makes more sense
  const [rows, setRows] = useState([]);
  // Constant for Business Data
  const [businessData, setBusinessData] = useState([]);
  // Columns for checkin table
  const columns = [
    {
      label: "First Name",
      field: "first_name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Last Name",
      field: "last_name",
      sort: "asc",
      width: 270,
    },
    {
      label: "Temperature",
      field: "temperature",
      sort: "asc",
      width: 200,
    },
    {
      label: "Date",
      field: "sheet_date",
      sort: "asc",
      width: 100,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 150,
    },
  ];

  // Runs on startup
  useEffect(() => {
    // Fetch Checkin Data
    axios
      .get(checkinUrl)
      .then((json) => {
        setRows(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Fetch Business Info
    axios
      .get(businessInfoUrl)
      .then((json) => {
        setBusinessData(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Merge columns + rows so it works with MDBDataTable
  const tableData = { columns, rows };
  // Render Table Function. Creates Sortable Table with MDB React
  const renderTable = () => {
    return <MDBDataTable striped bordered data={tableData} />;
  };

  return (
    <div>
      <section>
        <aside>
          <Toast>
            <ToastHeader>
              <h1>Contact Info</h1>
            </ToastHeader>
            <ToastBody>
              <dl>
                <dt>Address</dt>
                <dd>
                  {businessData.street}, {businessData.town} {businessData.zip}
                </dd>
                <dt>Phone</dt>
                <dd>{businessData.phone}</dd>
                <dt>Contact Email</dt>
                <dd>{businessData.email}</dd>
              </dl>
              <Link to='/BusinessInfo'>Edit Info</Link>
            </ToastBody>
          </Toast>
        </aside>
        <h1>{businessData.name}</h1>
        <h2>{businessData.type}</h2>
        <h3>Recent Check-ins</h3>
        <li>
          {" "}
          <Button color='success' tag={Link} to='/Business'>
            New Check-In
          </Button>{" "}
        </li>
        {renderTable()}
      </section>
    </div>
  );
};

export default BusinessMain;
