import Card from "../../components/Aspect/Card";
import React, {useRef} from 'react'
import { useParams } from "react-router-dom";
import axios from '../FetchRequest/axios';


function AddNewPatientForm(props){
    const params = useParams();


    const nameInputRef = useRef();
    const cnpUserInputRef = useRef();
    const phoneInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const onAddPatientHandler = async() =>{
            console.log(userData)
            await axios.post('Patient',userData).then(() => window.location.replace('/'))
        }
        // function onAddPatientHandler(userData){
        //     console.log('ccva')
        //     (axios.post('http://localhost:50864/api/Patient'), userData).then(() => {
        //         navigate('/');})
        // }
        const enteredName = nameInputRef.current.value;
        const enteredCnp = cnpUserInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const userData = {
            id: 0,
            name : enteredName,
            cnp : enteredCnp,
            phone : enteredPhone,
            photo : enteredImage,
            account: {
                id: 2,
                email: 'asdfasd',
                password: 'asdfadf',
                typeUser: 2
              },
            
        };
        // console.log(params.name)
        onAddPatientHandler()
        // Nu merge la functia asta? de ce?
    };
    


    return  <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="Name">Name</label>
                <input type='text' required id='Name' ref={nameInputRef}/>
            </div>
            <div>
            <label htmlFor='CNP'>CNP</label>
                <input type='text' required id='CNP' ref={cnpUserInputRef}/>
            </div>
            <div>
                <label htmlFor='Phone'>Phone</label>
                <input type='text' required id='Phone' ref={phoneInputRef}/>
            </div>
            <div>
                <label htmlFor='Image'>Image</label>
                <input type='text' required id='Image' ref={imageInputRef}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    </Card>
}

export default AddNewPatientForm;