import React, {
  Component,
  useState,
  setState,
  useEffect,
  setData,
} from "react";
import { Link } from "react-router-dom";
import { Table, Toast, ToastBody, ToastHeader, Button } from "reactstrap";
import axios from "axios";
import "./businessmain.css";

const BusinessMain = (props) => {
  let businessInfoUrl = "/react-backend/editBusinessInfo.php";
  let checkinUrl = "/react-backend/businessChart.php";
  const [checkinData, setCheckinData] = useState([]);
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    axios
      .get(checkinUrl)
      .then((json) => {
        setCheckinData(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });

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

  const renderTable = () => {
    return (
      <div class={"t1"}>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Temperature</th>
              <th>Date of Visit</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {checkinData.map((checkinData) => {
              return (
                <tr key={checkinData}>
                  <td>{checkinData.first_name}</td>
                  <td>{checkinData.last_name}</td>
                  <td>{checkinData.temperature}</td>
                  <td>{checkinData.sheet_date}</td>
                  <td>{checkinData.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
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
                <dd>{businessData.business_phone}</dd>
                <dt>Contact Email</dt>
                <dd>{businessData.business_email}</dd>
              </dl>
              <Link to='/BusinessInfo'>Edit Info</Link>
            </ToastBody>
          </Toast>
        </aside>

        <h1>{businessData.business_name}</h1>
        <h2>{businessData.business_type}</h2>
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
