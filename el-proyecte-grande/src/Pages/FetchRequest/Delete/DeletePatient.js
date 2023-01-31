import axios from "../../FetchRequest/axios";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Cookies from "js-cookie";

function DeletePatient(params){

    const onDeletePatientHandler = async() =>{
        console.log()
        await axios.delete(`Patients/${params.id}`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        // ).then(() =>
        // // window.location.replace('/patients')
        ).catch(function (error) {
            // window.location.replace('/patients')
            console.log(error);
          })
    }
    return <Button color="red" onClick={onDeletePatientHandler}>Delete</Button>
}

export default DeletePatient;