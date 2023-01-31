import axios from "../axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


function EditHouse(params){
    const data={
        id: params.data.id,
        street: params.data.street,
        city: params.data.city,
        nrStreet: params.data.nrStreet,
        linkLocation: params.data.linkLocation,
      }
    const [loadedHouse, setloadedHouse] = useState(data)

    const [open, setOpen] = useState(false)

    const onAddHandler = async() =>{
        
        console.log(loadedHouse)
        await axios.post('Houses',loadedHouse
        ).then(function (response) {
            window.location.reload()
          }).catch(function (error) {
            console.log(error);
          })
    }


    return <>
     <Modal
      closeIcon
      open={open}
      trigger={<Button>Edit House</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content='Adding' />
      <Form onSubmit={(e) => onAddHandler(e)}>
        <Modal.Content>
          <Form.Group widths='equal'>
          <Form.Input fluid label='Street' placeholder='Street' value={loadedHouse["street"]} onChange={(e)=> 
            setloadedHouse(prev =>( {...prev, street: e.target.value}))}/>
          <Form.Input fluid label='Number' placeholder='Number' value={loadedHouse["nrStreet"]} onChange={(e)=> 
            setloadedHouse(prev =>( {...prev, nrStreet: e.target.value}))}/>
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input fluid label='City' placeholder='city' value={loadedHouse["city"]} onChange={(e)=> 
            setloadedHouse(prev =>( {...prev, city: e.target.value}))}/>
          <Form.Input fluid label='linkLocation' placeholder='linkLocation' value={loadedHouse["linkLocation"]} onChange={(e)=> 
            setloadedHouse(prev =>( {...prev, linkLocation: e.target.value}))}/>
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

export default EditHouse;