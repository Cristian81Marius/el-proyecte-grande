import axios from "../../FetchRequest/axios";
import { Button } from "semantic-ui-react";
import Cookies from "js-cookie";

function DeleteEmployee(params){
    const onDeleteEmployeeHandler = async(e) =>{
        e.preventDefault()
        await axios.delete(`Employees/${params.id}`,{
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
    return <Button color="red" onClick={(e) => onDeleteEmployeeHandler(e)}>Delete</Button>
}

export default DeleteEmployee;