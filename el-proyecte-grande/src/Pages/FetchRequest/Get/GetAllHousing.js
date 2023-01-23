import { useState, useEffect } from "react";
import axios from "../../FetchRequest/axios";
import DeleteHouse from "../Delete/DeleteHouse";
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

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
    

return <Card.Group>
    {loadedHousing.map(house=>
<Card key={house.id}>
  <Card.Content>
    <Image
      floated='right'
      size='mini'
      src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
    />
    <Card.Header>Steve Sanders</Card.Header>
    <Card.Meta>Friends of Elliot</Card.Meta>
    <Card.Description>
        {house.linkLocation}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui two buttons'>
      <Button basic color='blue'>
        Detalii
      </Button>
      <Button basic color='blue'>
        Editare
      </Button>
    </div>
  </Card.Content>
</Card>)}
</Card.Group>
}

export default GetAllHousing;