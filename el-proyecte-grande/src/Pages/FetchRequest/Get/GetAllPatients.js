import { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "../../FetchRequest/axios";
// import DeletePatient from "../Delete/DeletePatient";
// import AddPatient from "../Put/AddPatient";
import React, { Component } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import AddPatient from "../Post/AddPatient";

function GetAllPatients(){
    
    const [loadedPatients, setloadedPatients] = useState([])

    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get('Patients')
        console.log(request["data"])
        setloadedPatients(request['data'])
        return request['data'];
      }
      fetchData();
    }, ['Patients'])

  return <> 
  <AddPatient></AddPatient>
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
        <Button primary>
          Add
        </Button>
        <Button>Delete</Button>
      </Card.Content>
    </Card>
  )}
</Card.Group>
</>
}

export default GetAllPatients;