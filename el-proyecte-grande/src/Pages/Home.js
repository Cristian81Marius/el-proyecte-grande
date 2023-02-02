import CommonPage from "./CommonPage";
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react";
import Buy from "./Buy";

function Home(){

    return <div>
        <CommonPage/>

        <form action="http://localhost:50864/api/payment" method="POST">
      <button type="submit">Checkout</button>
    </form>
        {/* <Button primary  onClick={Buy}> Buy </Button> */}
        {/* <Button primary  onClick={() =>window.location.replace("https://buy.stripe.com/test_cN2dSR4MU4cTaFq5kk") }> Buy </Button> */}

        Cumpara pachetul <Link to="/buy"><br/> 1Leu</Link>

        <Link to="/getToken"><br/> Token for password</Link>
    </div>
}

export default Home;