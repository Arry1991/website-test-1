import React, { useState } from "react";
import "./businessmain.css";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, FormGroup, Label, Input } from "reactstrap";

const BusinessInfo = (props) => {
  const [formData, setFormData] = useState({
    ownerEmail: "",
    name: "",
    businessType: "",
    email: "",
    phone: "",
    url: "",
    street: "",
    town: "",
    zip: "",
    county: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // on Form Submit run this function
  const registerHandler = () => {
    let formData2 = new FormData();

    formData2.append("ownerEmail", formData.ownerEmail);
    formData2.append("name", formData.name);
    formData2.append("businessType", formData.businessType);
    formData2.append("email", formData.email);
    formData2.append("phone", formData.phone);
    formData2.append("url", formData.url);
    formData2.append("street", formData.street);
    formData2.append("town", formData.town);
    formData2.append("zip", formData.zip);
    formData2.append("county", formData.county);
    console.log("clicked");

    // set urls
    const url = "/react-backend/business.php";

    // post business info data
    axios.post(url, formData2).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <h1>Enter Business Info</h1>
      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='Owner Email'
            type='text'
            name='ownerEmail'
            onChange={(e) => {
              onChange(e);
            }}
          />
          <AvField
            label='Business Name'
            type='text'
            name='name'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <Label>Business Type</Label>
          <Input
            type='select'
            name='businessType'
            id='businessType'
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option>Select an option</option>
            <option>Restaurant</option>
            <option>Retail</option>
            <option>Banking/Finance</option>
            <option>Auto Sales/Services</option>
            <option>Medical Office</option>
            <option>Daycare</option>
            <option>Construction</option>
            <option>Sports/Recreation</option>
            <option>Other</option>
          </Input>

          <AvField
            label='Business Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='Phone Number'
            type='phone'
            name='phone'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='URL'
            type='url'
            name='url'
            onChange={(e) => {
              onChange(e);
            }}
          />
          <AvField
            label='Street Address'
            type='address'
            name='street'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='Town'
            type='text'
            name='town'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='ZIP'
            type='text'
            name='zip'
            onChange={(e) => {
              onChange(e);
            }}
          />

          {/* List of Cunties. To-Do: Hide this data in another file/make a helper function */}
          <Label>County</Label>
          <Input
            type='select'
            name='county'
            id='county'
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option>Select an option</option>
            <option>Albany</option>
            <option>Allegany</option>
            <option>Bronx</option>
            <option>Broome</option>
            <option>Cattaraugus</option>
            <option>Cayuga</option>
            <option>Chautauqua</option>
            <option>Chemung</option>
            <option>Chenango</option>
            <option>Clinton</option>
            <option>Columbia</option>
            <option>Cortland</option>
            <option>Delaware</option>
            <option>Dutchess</option>
            <option>Erie</option>
            <option>Essex</option>
            <option>Franklin</option>
            <option>Fulton</option>
            <option>Genesee</option>
            <option>Greene</option>
            <option>Hamilton</option>
            <option>Herkimer</option>
            <option>Jefferson</option>
            <option>Kings</option>
            <option>Lewis</option>
            <option>Livingston</option>
            <option>Madison </option>
            <option>Monroe</option>
            <option>Montgomery</option>
            <option>Nassau</option>
            <option>New York</option>
            <option>Niagara</option>
            <option>Oneida</option>
            <option>Onondaga</option>
            <option>Ontario </option>
            <option>Orange</option>
            <option>Orleans</option>
            <option>Oswego</option>
            <option>Otsego</option>
            <option>Putnam</option>
            <option>Queens</option>
            <option>Rensselaer</option>
            <option>Richmond</option>
            <option>Rockland</option>
            <option>Saint Lawrence</option>
            <option>Saratoga</option>
            <option>Schenectady</option>
            <option>Schoharie</option>
            <option>Schuyler</option>
            <option>Seneca</option>
            <option>Steuben</option>
            <option>Suffolk</option>
            <option>Sullivan</option>
            <option>Tioga</option>
            <option>Tompkins</option>
            <option>Ulster</option>
            <option>Warren</option>
            <option>Washington</option>
            <option>Wayne</option>
            <option>Westchester</option>
            <option>Wyoming</option>
            <option>Yates</option>
          </Input>

          {/*Couldn't figure out padding for these reactsrap elements. This can be straightened out with CSS*/}
          <p></p>
        </FormGroup>

        {/* <FormGroup>
                <Label>Edit Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    id="businessDescription" 
                    onChange={(e) => {
                            onChange(e);
                        }}                
                />
                </FormGroup> */}

        <FormGroup>
          <ul>
            <li>
              {" "}
              <Button color='success'>Submit</Button>{" "}
            </li>
            <li>
              {" "}
              <Button tag={Link} to='/BusinessMain'>
                Back
              </Button>{" "}
            </li>
          </ul>
        </FormGroup>
      </AvForm>
    </>
  );
};

export default BusinessInfo;
