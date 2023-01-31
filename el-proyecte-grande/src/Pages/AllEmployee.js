import React from 'react';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Button } from 'semantic-ui-react';
import DeleteEmployee from './FetchRequest/Delete/DeleteEmployee';
import GetEmployee from './FetchRequest/Get/GetEmployee';
import AddEmployee from './FetchRequest/Put/AddEmployee';
import EditEmployee from './FetchRequest/Edit/EditEmployee';
import RoleAcces from '../authentification/Permision';

function FilterEmployee(props){
    
return <>
<AddEmployee/>
 <MDBRow center className='row-cols-1 row-cols-md-3 g-0'>
    {props.data.map(card=>
  <MDBCard key={card.id}>
    <MDBCardImage
      src={card.photo}
      alt='...'
      position='top'
      
    />
    <MDBCardBody>
      <MDBCardTitle>{card.firstName} {card.lastName}</MDBCardTitle>
      <MDBCardText>
        {card.phone}
      </MDBCardText>
      <MDBCardText>
        {RoleAcces("Admin") && <EditEmployee data={card}>Edit</EditEmployee> }
        <GetEmployee id={card.id}>Details</GetEmployee>
        {RoleAcces("Admin") && <DeleteEmployee id={card.id}>Delete</DeleteEmployee>}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    )}
</MDBRow>
</>
}

export default FilterEmployee;