import React, {
  List,
  Component,
  useState,
  setState,
  useEffect,
  setData,
} from "react";
import { Link } from "react-router-dom";
import { Table, Toast, ToastBody, ToastHeader, Button } from "reactstrap";
import axios from "axios";
import { RadioGroup, RadioButton } from "react-radio-buttons";
const SelectBusiness = (props) => {
  let urlAll = "/react-backend/displayAllBusiness.php";
  const [AllBusinesses, showAllBusinesses] = useState([]);
  const [business, setBusiness] = useState();
  useEffect(() => {
    axios
      .get(urlAll)
      .then((json) => {
        showAllBusinesses(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectButton = (e) => {
    const urlSelect = "/react-backend/selectBusiness.php";
    axios
      .post(urlSelect)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const selectedBusiness = (e) => {
    //console.log("this is street" + business);
    const urlSelect = "/react-backend/selectBusiness.php";
    axios
      .post(urlSelect, { street: business })
      .then((res) => {
        console.log("this is street" + business);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleBusiness = (business) => {
    setBusiness(business);
    console.log(business);
  };

  const renderTable = () => {
    return (
      <div class={"t1"}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Street</th>
              <th>Town</th>
              <th>Zip</th>
              <th>County</th>
            </tr>
          </thead>
          <tbody class="tbdy ">
            {AllBusinesses.map((AllBusinesses) => {
              return (
                <tr key={AllBusinesses}>
                  <td>{AllBusinesses.name}</td>
                  <td>{AllBusinesses.type}</td>
                  <td>{AllBusinesses.street}</td>
                  <td>{AllBusinesses.town}</td>
                  <td>{AllBusinesses.zip}</td>
                  <td>{AllBusinesses.county}</td>
                  <input
                    onClick={() => handleBusiness(AllBusinesses.street)}
                    type='radio'
                    value='street'
                    name='street'
                  />{" "}
                  Select this business
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <>
      <h1 class="heading">Select a business</h1>
      {renderTable()}
      <Button onClick={() => selectedBusiness(business)} color='success'>
        Select Business
      </Button>{" "}
      <p></p>
      <Button color='success' tag={Link} to='/AddBusiness'>
        Add Business
      </Button>{" "}
    </>
  );
};

export default SelectBusiness;
