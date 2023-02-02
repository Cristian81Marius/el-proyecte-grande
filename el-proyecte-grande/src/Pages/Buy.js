// import { useState } from "react";
// import Card from "../components/Aspect/Card";
// import { Form } from "semantic-ui-react";
import axios from "../Pages/FetchRequest/axios"

function Buy(){
    // window.location.replace("https://buy.stripe.com/test_eVaaGFenubFl14QfYZ")
    const  a = async() =>{
      const product= {
        id: "string",
        title: "string",
        description: "string",
        imageUrl: "string",
        price: 1
      }
  
      await axios.post('payment'
      ).then(function (response) {
        }).catch(function (error) {
          console.log(error);
        })
  }
  console.log("a")
      return<>
        {/* <button type="submit" onClick={onBuyHandler}>Pay 120 lei</button> */}
{a()}      
</> 
}
export default Buy;