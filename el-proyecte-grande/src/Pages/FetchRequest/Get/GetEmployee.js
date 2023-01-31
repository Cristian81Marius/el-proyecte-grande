import { useState } from "react";
import { Button, Image, Header, Icon, Modal,Grid  } from 'semantic-ui-react'
import axios from "../axios"

function GetEmployee(params){
    const [loadedEmployee, setloadedEmployee] = useState({})
    const [open, setOpen] = useState(false)

    const roles = {
        0:"Medic",
        1:"Supervisor",
        2:"Cleaner",
        3:"Manager"
    }

    const onGetEmployee = async() =>{
        await axios.get(`Employees/${params.id}`
        ).then(function (response) {
            console.log(response)
            setloadedEmployee(response['data'])
          }).catch(function (error) {
            console.log(error);
          })
    }
return <>
<Modal
 closeIcon
 open={open}
 trigger={<Button primary onClick={onGetEmployee}>Details</Button>}
 onClose={() => setOpen(false)}
 onOpen={() => setOpen(true)}
>
 <Header content='Details' />
   <Modal.Content>
   <Grid>
    <Grid.Column width={4}>
      <Image src={loadedEmployee.photo} style={{ width: 100, height: 100 }}/>
    </Grid.Column>
    <Grid.Column width={4}>
      <Grid.Row>
        <Header content="Phone" ></Header>
        {loadedEmployee.phone}
        </Grid.Row>
        <Grid.Row>
        <Header content="CNP" ></Header>
        {loadedEmployee.cnp}
        </Grid.Row>
        <Grid.Row>
        <Header content="Name" ></Header>
        {loadedEmployee.lastName} {loadedEmployee.firstName}
        </Grid.Row>
        <Grid.Row>
        <Header content="Role" ></Header>
        {roles[loadedEmployee.role]}
        </Grid.Row>
        </Grid.Column>
        <Grid.Column  width={4}>
        <Grid.Row>
                <Header content="Salary"/> {loadedEmployee.salary}
                </Grid.Row>
                <Grid.Row>
                <Header content="nrOfHours"/> {loadedEmployee.nrOfHours}
                </Grid.Row>
                <Grid.Row>
                <Header content="dateOfEmployment   "/> {loadedEmployee.dateOfEmployment}
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

export default GetEmployee;