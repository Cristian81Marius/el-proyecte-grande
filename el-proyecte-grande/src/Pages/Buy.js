// import { useState } from "react";
// import Card from "../components/Aspect/Card";
// import { Form } from "semantic-ui-react";
import { Button , Card} from "semantic-ui-react";
// import axios from "../Pages/FetchRequest/axio

function Buy(){
    // window.location.replace("https://buy.stripe.com/test_eVaaGFenubFl14QfYZ")
  // console.log("a")
      return<>
      <div>
        <form action="http://localhost:50864/api/payment" method="POST">
        <Card >
      <Card.Content>
        <Card.Header>
          Vrei sa te alaturi?
        </Card.Header>
        <Card.Description>
          Cu doar<strong>120 lei</strong> pe luna
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons' type="submit">
          <Button basic color='green'>
            Subscribe
          </Button>
        </div>
      </Card.Content>
    </Card>
    </form>  
    </div>   
</> 
}
export default Buy;