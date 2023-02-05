import AddPatient from "../FetchRequest/Post/AddPatient";


import axios from "../FetchRequest/axios";
import React, {useState, useEffect} from "react"
import PhoneInput from "react-phone-number-input";
import PhoneStyle from "../FetchRequest/Post/PhoneStyle.css"
import {Form, Button, Header, Icon, Modal, Image } from 'semantic-ui-react'
import Cookies from "js-cookie";

import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function Success(){

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


        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    const onRegisterHandler = async() =>{
            const data = {
              email: email,
              password: password,
              firstName: loadedPatient.firstName,
              lastName: loadedPatient.lastName,
                phoneNumber: loadedPatient.phone,
                roles:  ["Patient"] 
            }
            console.log(data)
            await axios.post('Account/register',data
            ).then(function (response) {
                console.log(response)
              }).catch(function (error) {
                console.log(error);
              })
        }

    const onHandler = async() =>{
        await onRegisterHandler()
        await onAddHandler()
    }
    return<>
    <Form onSubmit={(e) => onHandler(e)}>
          <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' value={loadedPatient.firstName} onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, firstName: e.target.value}))}/>
          <Form.Input fluid label='Last name' placeholder='Last name' value={loadedPatient.lastName} onChange={(e)=> 
            setloadedPatient(prev =>( {...prev, lastName: e.target.value}))}/>
          </Form.Group>
          <Form.Field>
            <label>Adresa de email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Parola</label>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </Form.Field>
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
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='cancel' /> Cancel
        </Button>
        <Button type="submit" color='green'>
          <Icon name='checkmark' /> Submit
        </Button>
      </Form>
  </>
}

export default Success;