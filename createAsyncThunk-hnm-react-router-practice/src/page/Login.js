import React, { useState } from 'react'
import {Form, Button, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authenticationAction } from '../redux/action/AuthenticationAction';


const Login = ({setAuthenticate}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispach = useDispatch();

  const loginUser = (event) => {    
    event.preventDefault();
    console.log("login user function issue");
    
    //setAuthenticate(true);  redux 이용하기 때문에 사용안함
    // 아래 dispatch 는 미들웨어 함수를 호출한다.
    dispach(authenticationAction.login(id, password));

    navigate("/");
  }

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login
