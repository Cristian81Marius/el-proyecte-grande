import { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "../../FetchRequest/axios";
// import { useParams } from "react-router-dom";
// import { PropaneSharp } from "@mui/icons-material";
import { Button, Image, Header, Icon, Modal,Grid  } from 'semantic-ui-react'
import axios from "../axios"

function GetPatient(params){
    const [loadedPatient, setloadedPatient] = useState({})
    const [open, setOpen] = useState(false)

    const onGetPatient = async() =>{
        await axios.get(`Patients/${params.id}`
        ).then(function (response) {
            setloadedPatient(response['data'])
          }).catch(function (error) {
            console.log(error);
          })
    }

return <>
<Modal
 closeIcon
 open={open}
 trigger={<Button primary onClick={onGetPatient}>Details</Button>}
 onClose={() => setOpen(false)}
 onOpen={() => setOpen(true)}
>
 <Header content='Details' />
   <Modal.Content>

   <Grid>
    <Grid.Column width={4}>
      <Image src={loadedPatient.photo} style={{ width: 100, height: 100 }}/>
    </Grid.Column>
    <Grid.Column width={9}>
      <Grid.Row>
        <Header content="Phone" ></Header>
        {loadedPatient.Phone}
        </Grid.Row>
        <Grid.Row>
        <Header content="CNP" ></Header>
        {loadedPatient.cnp}
        </Grid.Row>
        <Grid.Row>
        <Header content="Name" ></Header>
        {loadedPatient.lastName} {loadedPatient.firstName}
        </Grid.Row>
        <Grid.Row>
        <Header content="house" ></Header>
        {loadedPatient.houseId}
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

export default GetPatient;