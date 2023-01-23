import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../../FetchRequest/axios";
import { useParams } from "react-router-dom";


function GetAllPatients(){
    const params = useParams();
    const [loadedPatient, setloadedPatient] = useState([])

    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get(`Patients/${params.id}`)
        setloadedPatient(request['data'])
        return request['data'];
      } 
      fetchData();
    }, [`Patients/${params.id}`])
    return <div className= "mt-5 d-flex justify-content-left">


    <ol className="mt-4" striped bordered hover size="sm">
            <tr key= '0'>
                <td>Name:</td>
                <td><Link to={`/patient/:${loadedPatient.Id}`}>{loadedPatient.Name}</Link></td>
            </tr>
            <tr key= '1'>
                <td>CNP:</td>
                <td>{loadedPatient.CNP}</td>
            </tr>
            <tr key= '2'>
                <td>Phone:</td>
                <td>{loadedPatient.Phone}</td>
            </tr>
            <tr key= '3'>
                <td>Photo:</td>
                <td><img src={loadedPatient.Photo}/></td>
            </tr>
    </ol>
</div>
}

export default GetAllPatients;