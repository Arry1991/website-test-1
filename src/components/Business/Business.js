import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import "./business.css";

const Business = (props) => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    temp: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("firstName", formData.firstName);
    formData2.append("lastName", formData.lastName);
    formData2.append("email", formData.email);
    formData2.append("date", formData.date);
    formData2.append("temp", formData.temp);
    console.log("clicked");

    const url = "/react-backend/registration.php";
    axios

      .post(URL, formData2)
      //HERE URL WILL EQUAL BACKEND API LINK (POST API LINK.)
      //  firstName: String(FormData.firstName),
      //  lastName: String(FormData.lastName),
      //  email: String(FormData.email),
      //  password: String(FormData.password),
      //})
      .then((res) => {
        console.log(res);
        setMessage("Successful");
        toggle();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed");
        toggle();
      });
  };
  return (
    <>
      <h1>Sign in patrons</h1>
      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='First Name'
            type='text'
            name='firstName'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Last Name'
            type='text'
            name='lastName'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            type='date'
            name='date'
            label='Date'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Temperature'
            type='text'
            name='temp'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm>
    </>
  );
};

export default Business;
