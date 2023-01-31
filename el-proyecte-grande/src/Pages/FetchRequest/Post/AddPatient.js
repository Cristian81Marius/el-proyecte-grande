import { useNavigate } from 'react-router-dom';
import AddNewPatientForm from '../../FormPages/AddNewPatientForm';
import axios from "../axios";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select
} from 'semantic-ui-react'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react';
import PhoneStyle from "./PhoneStyle.css"

function AddPatient(){
  const [visible, setVisible] = useState()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cnp, setCnp] = useState("");
  const [photo, setPhoto] = useState("");

    const data = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        accountId: "1a0c4d47-65d7-4952-951d-5c8998003dd1",
        cnp: cnp,
        photo: photo,
        houseId: 1
        };

// 
    const onAddHandler = async(e) =>{
            e.preventDefault();

            await axios.put('Patients',data
            ).then(function (response) {
                console.log(response)
                // sessionStorage.setItem("userEmail", response.data["Email"])
                // window.location.replace('/');
              }).catch(function (error) {
                console.log(error);
              })
            }

    const toggleShow = ()  => {
      setVisible(!visible)}
      
    return <>
    
        {/* <Button onClick={(e) => onAddHandler(e)}>Add Patient</Button> */}
        <Button onClick={toggleShow}> Add Patient</Button>
        {visible && 
          <div> 
            <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
            value={firstName} onChange={(e)=> setFirstName(e.target.value)}
            required
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
            value={lastName} onChange={(e)=> setLastName(e.target.value)}
            required
          />
          <Form.Field
          required
          >
          <PhoneInput
            className={PhoneStyle}
            defaultCountry="RO"
            placeholder='Phone'
            value={phone} 
            onChange={setPhone}
            required
          />
          </Form.Field>
        </Form.Group>
        <Form.Field
          control={Input}
          label='CNP'
          placeholder='CNP'
          value={cnp} onChange={(e)=> setCnp(e.target.value)}
          required
        />
        <Form.Field>
          <input
          type="file"
          name = "file"
          placeholder = "Upload image"
          onChange={(e)=> setPhoto(e.target.value)}
          ></input>

        </Form.Field>
        
        <Form.Field control={Button}>Submit</Form.Field>
      </Form> 
          </div>
        }
    </>
}

export default AddPatient;