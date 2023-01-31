import { useState } from "react";
import { Button, Image, Header, Icon, Modal,Grid  } from 'semantic-ui-react'
import axios from "../axios"

function GetHouse(params){

    const [loadedHouse, setloadedHouse] = useState({})
    const [open, setOpen] = useState(false)

    const onGeHouse = async() =>{
        await axios.get(`Houses/${params.id}`
        ).then(function (response) {
            console.log(response)
            setloadedHouse(response['data'])
          }).catch(function (error) {
            console.log(error);
          })
    }

return <>
<Modal
 closeIcon
 open={open}
 trigger={<Button primary onClick={onGeHouse}>Details</Button>}
 onClose={() => setOpen(false)}
 onOpen={() => setOpen(true)}
>
 <Header content='Details' />
   <Modal.Content>

   <Grid>
    <Grid.Column width={9}>
      <Grid.Row>
        <Header content="City" ></Header>
        {loadedHouse.city}
        </Grid.Row>
        <Grid.Row>
        <Header content="Street" ></Header>
        {loadedHouse.street}
        </Grid.Row>
        <Grid.Row>
        <Header content="Number" ></Header>
        {loadedHouse.nrStreet}
        </Grid.Row>
        <Grid.Row>
        <Header content="Link" ></Header>
        <a href={loadedHouse.linkLocation}>{loadedHouse.linkLocation}</a>
        </Grid.Row>
    </Grid.Column>
  </Grid>

   </Modal.Content>
 <Modal.Actions>
   <Button color='red' onClick={() => setOpen(false)}>
     <Icon name='cancel' /> Back
   </Button>
 </Modal.Actions>
</Modal>
</>
}

export default GetHouse;