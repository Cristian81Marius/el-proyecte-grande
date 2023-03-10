import axios from "../../FetchRequest/axios";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Cookies from "js-cookie";

function DeleteHouse(params){
    const onDeleteHouseHandler = async() =>{
        await axios.delete(`Houses/${params.id}`,{
            headers: {
              'Authorization': `Bearer ${Cookies.get("token")}`
            }
        }
        ).then(() =>window.location.reload()
        ).catch(function (error) {
            window.location.reload()
            console.log(error);
          })
    }
    return <Button color="red" onClick={onDeleteHouseHandler}>Delete</Button>
}

export default DeleteHouse;