import { Forum, Password } from "@mui/icons-material";
import axios from "../Pages/FetchRequest/axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Pages/FetchRequest/Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";


function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [roles, setRoles] =  useState("")
    
    const [open, setOpen] = useState(false)

    const optionsRole = [
        { key: '0', value: 'Medic', text: 'Medic' },
        { key: '1', value: 'Employee', text: 'Employee' },
        { key: '2', value: 'Patient', text: 'Patient' },
        { key: '3', value: 'Admin', text: 'Admin' }]


    const onRegisterHandler = async() =>{
        const data = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
            phoneNumber: phoneNumber,
            roles:  [roles] 
        }
        console.log(data)
        await axios.post('Account/register',data
        ).then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error);
          })
    }

console.log(roles)
    return <>
     <Modal
      closeIcon
      open={open}
      trigger={<Link type="button">Register</Link>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Register' />
      <Form onSubmit={(e) => onRegisterHandler(e)}>
        <Modal.Content>
          <Form.Field>
            <label>Adresa de email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Parola</label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </Form.Field>
          <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          <Form.Input fluid label='Last name' placeholder='Last name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Role'
            options={optionsRole}
            placeholder='Role'
            value={roles} 
            onChange={(e, data)=> setRoles(data.value)}
          />
          <Form>
          <PhoneInput
            className={PhoneStyle}
            defaultCountry="RO"
            placeholder='Phone'
            value={phoneNumber} 
            onChange={setPhoneNumber}
            required
          />
          </Form>
            </Form.Group>
        </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='cancel' /> Cancel
        </Button>
        <Button type="submit" color='green'>
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
      </Form>
    </Modal>
    </>
}

export default Register;