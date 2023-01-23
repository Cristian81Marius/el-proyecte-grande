import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "../../FetchRequest/axios";
import _ from 'lodash'
import React from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
// import AllEmployee from "../../UsersViews/Employee";
import FilterEmployee from "../../AllEmployee";

function GetAllEmployees(){
    const [loadedEmployees, setloadedEmployees] = useState([])
    const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
    
    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get('Employees')
        console.log(request['data'])
        setloadedEmployees(request['data'])
        return request['data'];
      }
      fetchData();
    }, ['Empoyee'])

    
    function filterEmployeeData(role){
        return loadedEmployees.filter(c=>c.role == role)
    }


return (<>
    <MDBTabs fill className='mb-3'>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('Medic')} active={fillActive === 'Medic'}>
        Medic
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('Supervisor')} active={fillActive === 'Supervisor'}>
        Supervisor
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('Cleaner')} active={fillActive === 'Cleaner'}>
        Curatenie
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('Manager')} active={fillActive === 'Manager'}>
        Manager
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>

    <MDBTabsContent>
      <MDBTabsPane show={fillActive === 'Medic'}><FilterEmployee data={filterEmployeeData(0)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Supervisor'}><FilterEmployee data={filterEmployeeData(1)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Cleaner'}><FilterEmployee data={filterEmployeeData(2)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Manager'}><FilterEmployee data={filterEmployeeData(3)}/></MDBTabsPane>
    </MDBTabsContent>
    {/* <FilterEmployee data={loadedEmployees}/> */}
  </>
  )
}

export default GetAllEmployees;