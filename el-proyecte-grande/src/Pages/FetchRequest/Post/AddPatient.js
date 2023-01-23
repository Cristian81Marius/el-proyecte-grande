// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddNewPatientForm from '../../FormPages/AddNewPatientForm';
import axios from "../axios";


function AddPatient(){

    

    const data = {
        firstName: "test",
        lastName: "cevdsfadfaaaaaaaaaaaa",
        phone: "rasda",
        accountId: "1a0c4d47-65d7-4952-951d-5c8998003dd1",
        cnp: "acad",
        photo: "asdfasd",
        houseId: 1
        };


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

    // const onAddHandler = async(e) =>{
    //     e.preventDefault();
    //     fetch(
    //         "http://localhost:50864/api/Patients/add",
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers:{
    //                 'Content-Type':'application/json'
                    
    //             }
    //         }
    //     ).then((response) => {
    //         console.log(response)
    //     });
    // }
    return <section>
        <h1>New Patient</h1>
        <form onSubmit={(e) => onAddHandler(e)}>
            <button type="submit"></button>
         </form>
    </section>
}

export default AddPatient;