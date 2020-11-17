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
  const url = "/react-backend/businessChart.php";
  const [data, setData] = useState([]);

  const [businessData, setBusinessData] = useState({
    name: "McDonald's",
    type: "Restaurant",
    email: "joe@joespizza.com",
    businessemail: "contact@joespizza.com",
    phone: "5167554688",
    address: "100 Pizza St",
    zip: "11501",
    description: "Big Old Burgers",
  });

  useEffect(() => {
    axios
      .get(url)
      .then((json) => {
        setData(json.data);
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
            {data.map((data) => {
              return (
                <tr key={data}>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.temperature}</td>
                  <td>{data.sheet_date}</td>
                  <td>{data.email}</td>
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
                <dd>{businessData.address}</dd>
                <dd>{businessData.zip}</dd>
                <dt>Phone</dt>
                <dd>{businessData.phone}</dd>
                <dt>Contact Email</dt>
                <dd>{businessData.email}</dd>
                <dt>Owner Email</dt>
                <dd>{businessData.businessemail}</dd>
              </dl>
              <Link to='/BusinessInfo'>Edit Info</Link>
            </ToastBody>
          </Toast>
        </aside>

        <h1>{businessData.name}</h1>
        <h2>{businessData.description}</h2>
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
