import { useState } from "react";
import Card from "../components/Aspect/Card";
import { Form } from "semantic-ui-react";

function Buy(){
    window.location.replace("https://buy.stripe.com/test_eVaaGFenubFl14QfYZ")
    // const [number, setnumber] = useState("");
    // const [date, setDate] = useState("");
    // const [cvv, setCvv] = useState("");

    // const data={
    //     number : number,
    //     date : date,
    //     cvv : cvv
    // }

    return<>
    <form action="/Payment" method="POST">
      <button type="submit">Pay 120 lei</button>
    </form>
    </> 
    // <Card>
        {/* <form>
            <label hrmlfor="number">Credic card number</label>
            <input value={number} onChange={(e)=> setnumber(e.target.value)} id="number" name="number"></input>
            <label hrmlfor="expyration">Expire Date</label>
            <input value={date} onChange={(e)=> setDate(e.target.value)} type= "date" id="date" name="date"></input>
            <label hrmlfor="cvv">CVV</label>
            <input value={cvv} onChange={(e)=> setCvv(e.target.value)} id="cvv" name="cvv"></input>
            <button type="submit">Log In</button>
        </form>
 */}


    {/* <form class="ui form">
        <h4 class="ui dividing header">Billing Information</h4>
        <div class="field">
        <label>Card Type</label>
            <div class="ui selection dropdown">
            <input type="hidden" name="card[type]"/>
            <div class="default text">Type</div>
            <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item" data-value="visa">
          <i class="visa icon"></i>
          Visa
        </div>
        <div class="item" data-value="amex">
          <i class="amex icon"></i>
          American Express
        </div>
        <div class="item" data-value="discover">
          <i class="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div class="fields">
    <div class="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>
    </div>
    <div class="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
    </div>
    <div class="six wide field">
      <label>Expiration</label>
      <div class="two fields">
        <div class="field">
          <select class="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div class="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
        </div>
      </div>
    </div>
  </div>
  <div class="ui button" tabindex="0">Submit</div>
</form> */}
        {/* </Card> */}
}

export default Buy;