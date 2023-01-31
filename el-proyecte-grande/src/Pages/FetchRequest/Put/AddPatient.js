import axios from "../axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import UpdateFirebaseImage from "../../../firebase/upload_image";

import db from '../../../firebase/firebase';
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function AddPatient(){

  const addlist = (e) => {
    handleImageAsFile(e)
    e.preventDefault();
    try {
      let file = isfile;
      const storage = getStorage();
      var storagePath = 'uploads/' + Cookies.get("id") + file.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on('state_changed', (snapshot) => {
        // progrss function ....
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => { 
        // error function ....
        console.log(error);

      }, 
      async() => {
        // complete function ....
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setloadedPatient(prev =>( {...prev, photo: downloadURL}))
          // db.collection('users').add({
          //   images: downloadURL,
          //   datetime: firebase.firestore.FieldValue.serverTimestamp()
          // })
          // setFile(null);
        })
      });    

    } catch (error) { throw error;}
  }

    const [isfile, setFile] = useState("");
    const handleImageAsFile = (e) => {
      setFile(e.target.files[0]);
      // console.log(isfile)
    }


    const data = {
      cnp: null,
      photo: null,
      firstName: null,
      lastName: null,
      phone: null,
      houseId: null,
      accountId: Cookies.get("id"),
    }
  

  // const test = async(isfile) =>{
  //   await UpdateFirebaseImage(isfile).then((response) => console.log(response))
  // }

  const [loadedPatient, setloadedPatient] = useState(data)


  const onAddHandler = (e) =>{
    e.preventDefault();
      axios.put('Patients',loadedPatient
      ).then(function (response) {
          console.log("a")
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
      trigger={<Button>Add Patient</Button>}
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
            onChange={(e)=> 
              setloadedPatient(prev =>( {...prev, phone: e}))}
            required
          />
          </Form>
            </Form.Group>
            <Form.Group widths='equal'>
          <Form.Input 
          fluid 
          type="file" 
          label='Photo' 
          placeholder='Photo'  
          onChange={addlist}/>
          <Image src={isfile}/>
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

export default AddPatient