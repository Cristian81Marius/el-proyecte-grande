import { useState, useEffect } from "react";
import axios from "../../FetchRequest/axios";
import DeleteHouse from "../Delete/DeleteHouse";
import React from 'react'
import {Card, Image } from 'semantic-ui-react'
import GetHouse from "./GetHouse";
import AddHouse from "../Put/AddHouse"
import EditHouse from "../Edit/EditHouse";
import RoleAcces from "../../../authentification/Permision";

function GetAllHousing(){
    const [loadedHousing, setloadedHousing] = useState([])

    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get('Houses')
        console.log(request['data'])
        setloadedHousing(request['data'])
        return request['data'];
      }
      fetchData();
    }, ['House'])
    

return<>
 <AddHouse/>
 <Card.Group>
    {loadedHousing.map(house=>
<Card key={house.id}>
  <Card.Content>
    <Image
      floated='right'
      size='mini'
      src='https://dalimag.ro/9470-large_default/hous-anti-stres.webp'
    />
    <Card.Header>House {house.id}</Card.Header>
    <Card.Meta>{house.street} {house.city} {house.nrStreet}</Card.Meta>
    <Card.Description>
      <a href={house.linkLocation}>{house.linkLocation}</a>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui three buttons'>
      <GetHouse id={house.id}/>
      <EditHouse data={house}/>
      {!RoleAcces("Ptient") && <DeleteHouse id={house.id}/> }
    </div>
  </Card.Content>
</Card>)}
</Card.Group>
</>
}

export default GetAllHousing;