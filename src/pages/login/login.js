import axios from "axios";
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MyContext } from "../../context";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(MyContext);

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill out the fields");
    }

    axios
      .post("http://localhost:5000/login", { email, password })
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }

  return (
  <div className="col-5"> 
    <Form onSubmit={handleLogin}>
    <Form.Group className="mb-3" controlId="formBasicEmail" style={{position:'relative', margin:'40px',padding:'20px'}}>
      <Form.Label className="text-light">Email address</Form.Label>
      <Form.Control 
      type="email" 
      placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      required
      />
      <Form.Text className="text-light">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3 text-light" controlId="formBasicPassword" style={{position:'relative', margin:'40px',padding:'20px', bottom:'30px'}}>
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password" 
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      required
      />
    </Form.Group>

    <Button variant="primary" type="submit" style={{position:'relative',left:'60px',bottom:'30px'}}>
      Login
    </Button>
    </Form>
  </div>
  );
}

export default Login;