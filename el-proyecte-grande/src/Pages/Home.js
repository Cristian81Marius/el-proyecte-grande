import CommonPage from "./CommonPage";
import { Link } from "react-router-dom";
import {Button, Grid} from "semantic-ui-react";
import Buy from "./Buy";
import Cookies from "js-cookie"; 

import React, { Component, createRef } from 'react'
import {
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'

function Home(){

    return<div>
         <CommonPage/> 
         {Cookies.get("email") != null &&
        <Buy position='ui right'/>
}
    </div>
}

export default Home;