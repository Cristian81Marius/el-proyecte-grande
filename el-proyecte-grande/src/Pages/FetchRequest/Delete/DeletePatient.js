import axios from "../../FetchRequest/axios";
import { useParams } from "react-router-dom";

function DeletePatient(params){
    console.log(`Patient/${params.id}`)
    // const params = useParams()
    const onDeletePatientHandler = async() =>{
        console.log()
        await axios.delete(`Patients/${params.id}`).then(() => window.location.replace('/'))
    }
    return <button onClick={onDeletePatientHandler}>Delete</button>
}

export default DeletePatient;