import GetPatient from '../FetchRequest/Get/GetPatient'
import AddPatient from '../FetchRequest/Put/AddPatient';

function Patient(){
    return <div>
        <AddPatient/>
        <GetPatient/>
    </div>

}

export default Patient;