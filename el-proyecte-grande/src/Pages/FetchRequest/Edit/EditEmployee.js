import axios from "../axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal,Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


function EditEmployee(props){
    const data={
    id: props.data.id,
    role: props.data.role,
    salary: props.data.salary,
    nrOfHours: props.data.nrOfHours,
    dateOfEmployment: props.data.dateOfEmployment,
    cnp: props.data.cnp,
    photo: props.data.photo,
    firstName: props.data.firstName,
    lastName: props.data.lastName,
    phone: props.data.phone,
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
        await axios.post('Employees',loadedEmployee
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
      trigger={<Button>Edit Employee</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Adding' />
      <Form onSubmit={(e) => onAddHandler(e)}>
        <Modal.Content>
          <Form.Group widths='equal'>
          <Form.Input fluid label='firstName' placeholder='firstName' value={loadedEmployee["firstName"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, firstName: e.target.value}))}/>
          <Form.Input fluid label='lastName' placeholder='lastName' value={loadedEmployee["lastName"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, lastName: e.target.value}))}/>
        <Form.Input fluid label='cnp' placeholder='cnp' value={loadedEmployee["cnp"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, cnp: e.target.value}))}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <PhoneInput 
          className={PhoneStyle} 
          defaultCountry="RO" 
          placeholder='phone' 
          value={loadedEmployee["phone"]} 
          onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, phone: e}))} />
          <Form.Input fluid type="date" label='dateOfEmployment' placeholder='dateOfEmployment' value={loadedEmployee["dateOfEmployment"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, dateOfEmployment: e.target.value}))}/>
            </Form.Group>
            <Form.Input fluid type="number" label='salary' placeholder='salary' value={loadedEmployee["salary"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, salary: e.target.value}))}/>
            <Form.Input fluid label='nrOfHours' placeholder='nrOfHours' value={loadedEmployee["nrOfHours"]} onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, nrOfHours: e.target.value}))}/>
            <Form.Select
            fluid
            label='Role'
            options={optionRoles}
            placeholder='Role'
            value={loadedEmployee["role"]} 
            onChange={(e, data)=> setloadedEmployee(prev =>( {...prev, role: data.value}))}
            required/>

        <Form.Group>
            <Form.Input type="file" label='photo' placeholder='photo' onChange={(e)=> 
            setloadedEmployee(prev =>( {...prev, photo: e.target.value}))}/>
            <Image src={loadedEmployee["photo"]} style={{ width: 100, height: 100 }}/>
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

export default EditEmployee;