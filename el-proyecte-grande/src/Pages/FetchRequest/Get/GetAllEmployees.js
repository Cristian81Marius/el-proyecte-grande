import { useState, useEffect } from "react";
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
import FilterEmployee from "../../AllEmployee";

function GetAllEmployees(){
    const [loadedEmployees, setloadedEmployees] = useState([])
    const [fillActive, setFillActive] = useState('all');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };
    
    useEffect(() => {
      async function fetchData(){
        const request =  await axios.get('Employees')
        setloadedEmployees(request['data'])
        return request['data'];
      }
      fetchData();
    }, ['Empoyee'])

    
    function filterEmployeeData(role){
      if(role==="all"){
        return loadedEmployees
      }else{
        return loadedEmployees.filter(c=>c.role == role)
      }
    }


return (<>
    <MDBTabs fill className='mb-3'>
      <MDBTabsItem>
      <MDBTabsLink onClick={() => handleFillClick("all")} active={fillActive === "all"}>
        All
        </MDBTabsLink>
        </MDBTabsItem>
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
      <MDBTabsPane show={fillActive === "all"}><FilterEmployee data={filterEmployeeData("all")}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Medic'}><FilterEmployee data={filterEmployeeData(0)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Supervisor'}><FilterEmployee data={filterEmployeeData(1)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Cleaner'}><FilterEmployee data={filterEmployeeData(2)}/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'Manager'}><FilterEmployee data={filterEmployeeData(3)}/></MDBTabsPane>
    </MDBTabsContent>
  </>
  )
}

export default GetAllEmployees;