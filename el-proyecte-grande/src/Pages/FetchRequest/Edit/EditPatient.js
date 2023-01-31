import axios from "../axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal, Image } from 'semantic-ui-react'

function EditPatient(props){

    const data={
        id: props.data.id,
      cnp: props.data.cnp,
      photo: props.data.photo,
      firstName: props.data.firstName,
      lastName: props.data.lastName,
      phone: props.data.phone,
      houseId: props.data.houseId,
      accountId: "1a0c4d47-65d7-4952-951d-5c8998003dd1",
    }

  const [loadedPatient, setloadedPatient] = useState(data)


  const onAddHandler = async() =>{
      await axios.post('Patients',loadedPatient
      ).then(function (response) {
          window.location.reload()
        }).catch(function (error) {
          console.log(error);
        })
  }

    const [open, setOpen] = useState(false)

    const optionsHouse = [
        { key: '0', value: '0', text: '1' },
        { key: '1', value: '1', text: '2' },
        { key: '2', value: '2', text: '3' },
        { key: '3', value: '3', text: '4' }]

    console.log(loadedPatient)
    return <>
     <Modal
      closeIcon
      open={open}
      trigger={<Button>Edit</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Adding' />
      <Form onSubmit={(e) => onAddHandler(e)}>
        <Modal.Content>
          <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' value={loadedPatient.firstName} onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, firstName: e.target.value}))}/>
          <Form.Input fluid label='Last name' placeholder='Last name' value={loadedPatient.lastName} onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, lastName: e.target.value}))}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='House'
            options={optionsHouse}
            value={loadedPatient.houseId} 
            onChange={(e,data)=> setloadedPatient(prev =>( {...prev, houseId: data.value}))}/>
          <Form>
          <PhoneInput
            className={PhoneStyle}
            defaultCountry="RO"
            placeholder='Phone'
            value={loadedPatient.phone} 
            onChange={(e) => setloadedPatient(prev =>( {...prev, phone: e}))}
            required
          />
          </Form>
            </Form.Group>
            <Form.Group widths='equal'>
          <Form.Input fluid type="file" label='Photo' placeholder='Photo'  onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, photo: e.target.value}))}/>
          <Image src={loadedPatient.photo} style={{ width: 100, height: 100 }}/>
          <Form.Input fluid label='CNP' placeholder='CNP' value={loadedPatient.cnp} onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, cnp: e.target.value}))}/>
          </Form.Group>
          <Form.Group widths='equal'>
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

export default EditPatient;