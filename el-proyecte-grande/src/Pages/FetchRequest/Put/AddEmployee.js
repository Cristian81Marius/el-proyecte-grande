import axios from "../axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";



function AddEmployee(){

    const data={
        role: null,
        salary: null,
        nrOfHours: null,
        dateOfEmployment: null,
        cnp: null,
        photo: null,
        firstName: null,
        lastName: null,
        phone: null,
        accountId: "1a0c4d47-65d7-4952-951d-5c8998003dd1",
      }
    const optionRoles = [
        { key: '0', value: 0, text: 'Medic' },
        { key: '1', value: 1, text: 'Supervisor' },
        { key: '2', value: 2, text: 'Cleaner' },
        { key: '3', value: 3, text: 'Manager' }]
    const [loadedEmployee, setloadedEmployee] = useState(data)

    const [open, setOpen] = useState(false)

    const onAddHandler = async() =>{
        
        console.log(loadedEmployee)
        await axios.put('Employees',loadedEmployee
        ).then(function (response) {
            window.location.reload()
          }).catch(function (error) {
            console.log(error);
          })
    }
    

    console.log(loadedEmployee)
    return <>
     <Modal
      closeIcon
      open={open}
      trigger={<Button>Add Employee</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Adding' />
      <Form onSubmit={(e) => onAddHandler(e)}>
        <Modal.Content>
          <Form.Group widths='equal'>
          <Form.Input fluid label='firstName' placeholder='firstName' value={loadedEmployee["firstName"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, firstName: e.target.value}))}
            required/>
          <Form.Input fluid label='lastName' placeholder='lastName' value={loadedEmployee["lastName"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, lastName: e.target.value}))}
            required/>
        <Form.Input fluid label='cnp' placeholder='cnp' value={loadedEmployee["cnp"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, cnp: e.target.value}))}
            required/>
          </Form.Group>
          <Form.Group widths='equal'>
          <PhoneInput 
          className={PhoneStyle} 
          defaultCountry="RO" 
          placeholder='phone' 
          value={loadedEmployee["phone"]} 
          onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, phone: e}))} 
            required/>
          <Form.Input fluid type="date" label='dateOfEmployment' placeholder='dateOfEmployment' value={loadedEmployee["dateOfEmployment"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, dateOfEmployment: e.target.value}))}
            required/>
            </Form.Group>
            <Form.Input fluid type="number" label='salary' placeholder='salary' value={loadedEmployee["salary"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, salary: e.target.value}))}
            required/>
            <Form.Input fluid type="number" label='nrOfHours' placeholder='nrOfHours' value={loadedEmployee["nrOfHours"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, nrOfHours: e.target.value}))}
            required/>
            <Form.Select
            fluid
            label='Role'
            options={optionRoles}
            placeholder='Role'
            value={loadedEmployee["role"]} 
            onChange={(e, data)=> setloadedEmployee(prev =>( {...prev, role: data.value}))}
            required/>

        <Form.Group>
            <Form.Input type="file" label='photo' placeholder='photo' value={loadedEmployee["photo"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, photo: e.target.value}))}
            required/>
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

export default AddEmployee;