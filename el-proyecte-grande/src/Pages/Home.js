import CommonPage from "./CommonPage";
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react";

function Home(){
    function onClickHendler(){
        window.location.replace("/buy")
    }
    return <div>
        <CommonPage/>

        <Button primary  onClick={onClickHendler}> Buy </Button>
        Cumpara pachetul <Link to="/buy"><br/> 1Leu</Link>

        <Link to="/getToken"><br/> Token for password</Link>
    </div>
}

export default Home;