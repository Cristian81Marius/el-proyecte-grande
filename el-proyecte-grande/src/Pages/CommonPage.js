import Card from "../components/Aspect/Card";
import Informations from "../components/Aspect/Informations";

function CommonPage(){
    return <div>
        <Card>
            <img src="https://eqchomecare.com/wp-content/uploads/2021/05/inhomecare-post-eqc2-1170x585.jpg"/>
            <h1>Let our family take care of yours</h1>
        </Card>
        <Card>
            <Informations/>
        </Card>
    </div>
}

export default CommonPage;