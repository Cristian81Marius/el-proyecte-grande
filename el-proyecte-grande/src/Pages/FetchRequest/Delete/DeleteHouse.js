import axios from "../../FetchRequest/axios";
import { useParams } from "react-router-dom";

function DeleteHouse(params){
    console.log(`Patient/${params.id}`)
    const onDeleteHouseHandler = async() =>{
        await axios.delete(`Houses/${params.id}`).then(() => window.location.replace('/'))
    }
    return <button onClick={onDeleteHouseHandler}>Delete</button>
}

export default DeleteHouse;