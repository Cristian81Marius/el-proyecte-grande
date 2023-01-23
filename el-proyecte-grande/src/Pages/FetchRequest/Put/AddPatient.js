import axios from '../axios'

function AddPatient(){

    const onAddPatientHandler = async() =>{
        const data={
            "id": 0,
            "name": "string",
            "phone": "string",
            "idAccount": 0,
            "account": {
              "id": 0,
              "email": "user@example.com",
              "passwordHash": "string",
              "passwordSalt": "string",
              "verificationToken": "string",
              "verificatedAt": "2023-01-13T06:50:43.385Z",
              "passwordResetToken": "string",
              "passwordTokenExpires": "2023-01-13T06:50:43.385Z",
              "typeUser": 0,
              "emailConfirmed": true
            },
            "cnp": "string",
            "photo": "string",
            "idHouse": 0,
            "house": {
              "id": 0,
              "street": "string",
              "city": "string",
              "nrStreet": 0,
              "linkLocation": "string",
              "patients": [
                null
              ]
            }
        }
        await axios.put(`Patients`, data).then(() => window.location.replace('/'))
    }
    return <button onClick={onAddPatientHandler}>Add</button>

}

export default AddPatient;