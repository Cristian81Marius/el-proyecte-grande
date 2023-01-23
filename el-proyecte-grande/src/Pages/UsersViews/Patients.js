import AddNewPatientForm from "../FormPages/AddNewPatientForm"
import GetAllPatients from "../FetchRequest/Get/GetAllPatients"
import AddPatient from "../FetchRequest/Put/AddPatient";

function AllPatients(){
    return <div>
        <AddPatient/>
        <GetAllPatients/>
    </div>
}

export default AllPatients;