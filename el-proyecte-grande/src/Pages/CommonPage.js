import { Header, Image } from "semantic-ui-react";
import Card from "../components/Aspect/Card";
import Informations from "../components/Aspect/Informations";
import ChangedInfo from "./ChangedInfo";

function CommonPage(){
    return <div>
        <ChangedInfo/>
            {/* <Image src="https://eqchomecare.com/wp-content/uploads/2021/05/inhomecare-post-eqc2-1170x585.jpg" fluid/> */}
            {/* <Header>Let our family take care of yours</Header> */}
            {/* <Informations/> */}
    </div>
}

export default CommonPage;