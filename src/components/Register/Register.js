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
import "./register.css";

const Register = (props) => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const registerHandler = () => {
    console.log("clicked");
    axios
      .post(URL, {
        //HERE URL WILL EQUAL BACKEND API LINK (POST API LINK.)
        firstName: String(FormData.firstName),
        lastName: String(FormData.lastName),
        email: String(FormData.email),
        password: String(FormData.password),
      })
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
      <h1>Register</h1>
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
            type='password'
            name='password'
            label='Password'
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <p>{message}</p>
    </>
  );
};

export default Register;
