import { Password } from "@mui/icons-material";
import axios from "../Pages/FetchRequest/axios";
import React, {useState, useEffect, Component} from "react"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';

import {Form, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import {useSignIn} from 'react-auth-kit'

function Login(){

  const signIn = useSignIn()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false)

    const onLoginHandler = async(e) =>{
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        await axios.post('Account/login',data
        ).then(function (response) {
            console.log(response.data["token"])
            const decode_token = jwt_decode(response.data["token"])

            // signIn({
            //   token: response.data.token,
            //   expiresIn: 3600,
            //   tokenType: "Bearer",
            //   authState:{
            //     email: decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            //     id: decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            //     role: decode_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            //   }
            // })
            Cookies.set("id",decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
            Cookies.set("email", decode_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            Cookies.set("role", decode_token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
            Cookies.set("token", response.data["token"])
            window.location.replace('/');
          }).catch(function (error) {
            console.log(error);
          })
        }
    console.log(sessionStorage.getItem["user"])

    return (<>
     <Modal
      closeIcon
      open={open}
      trigger={<Link type="button">Login</Link>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Login' as='h2' color='teal' textAlign='center'/>
      <Form onSubmit={(e) => onLoginHandler(e)}>
        <Modal.Content>
          <Form.Field>
            <Form.Input fluid icon='user' iconPosition='left' type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </Form.Field>
          <Form.Field>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} 
          />
          </Form.Field>
        </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button type="submit" color='green'>
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
      </Form>
    </Modal>

        {/* <Card className="text-center" style={{ width: '18rem' , marginLeft: "auto", marginRight: "auto", marginTop:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresa de email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Parola</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Card> */}
    </>
    )
}

export default Login;