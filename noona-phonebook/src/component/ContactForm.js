import React, { createContext, useState } from 'react'
import {Form, Button} from "react-bootstrap"
import { useDispatch } from 'react-redux';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber]=useState();
  const dispatch = useDispatch();

  const createContact = (event) => {
    event.preventDefault();

    // useDispatch 를 이용해 action 을 reducer 에게 던진다.
    dispatch({type:"ADD_CONTACT",payload:{name, phoneNumber}}) 
  }

  return (
    <div>
      <Form onSubmit={(event) => createContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name" 
            onChange={(event) => setName(event.target.value)}           
            />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(event) => setPhoneNumber(event.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
