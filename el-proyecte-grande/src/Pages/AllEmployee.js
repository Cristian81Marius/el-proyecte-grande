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

function FilterEmployee(props){
    
return <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
<MDBCol>
    {props.data.map(card=>
  <MDBCard>
    <MDBCardImage
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle>Card title</MDBCardTitle>
      <MDBCardText>
        This is a longer card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
    )}
</MDBCol>
</MDBRow>
}

export default FilterEmployee;