import { useState, useEffect } from "react";
import axios from "../../FetchRequest/axios";
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import EditPatient from "../Edit/EditPatient";
import GetPatient from "./GetPatient";
import DeletePatient from "../Delete/DeletePatient";
import {withAuthHeader} from 'react-auth-kit';
import Cookies from "js-cookie";
import RoleAcces from "../../../authentification/Permision";

function GetAllPatients(){
    
    const [loadedPatients, setloadedPatients] = useState([])

    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get('Patients',{
        headers: {
          'Authorization': `Bearer ${Cookies.get("token")}`
        }
      }
      )
        setloadedPatients(request['data'])
        return request['data'];
      }
      fetchData();
    }, ['Patients'])

  return <> 

  <Card.Group doubling itemsPerRow={3} stackable>
  {loadedPatients.map(card=>
    <Card key={card.id}>
        <Image src={card.photo} />
      <Card.Content>
          <>
            <Card.Header>{card.cnp}</Card.Header>
            <Card.Meta>{card.name}</Card.Meta>
            <Card.Description>{card.phone}</Card.Description>
          </>
      </Card.Content>

      <Card.Content extra>
        <GetPatient id={card.id}/>
        {!RoleAcces("Patient") && <> {!RoleAcces("Medic") && <EditPatient data={card}/>}</>}
        {!RoleAcces("Patient") && <> {!RoleAcces("Medic") && <DeletePatient id={card.id}/>}</>}
      </Card.Content>
    </Card>
  )}
</Card.Group>
</>
}

export default GetAllPatients;