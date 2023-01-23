import Card from "../../components/Aspect/Card"
import {useRef} from 'react'


function AddNewUserForm(props){
    const emailInputRef = useRef();
    const typeUserInputRef = useRef();
    const addressInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredTypeUser = typeUserInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const userData = {
            email : enteredEmail,
            typeUser : enteredTypeUser,
            adress : enteredAddress,
            image : enteredImage
        }

        props.onAddUser(userData);

    };

    return  <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' required id='email' ref={emailInputRef}/>
            </div>
            <div>
                <label htmlFor='typeUser'>User Type</label>
                <select id='typeUser' ref={typeUserInputRef}>
                    <option value='Employee'>Employee</option>
                    <option value='Medic'>Medic</option>
                    <option value='Patient'>Patient</option>
                </select>
            </div>
            <div>
                <label htmlFor="adress">Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type='file' id='image' ref={imageInputRef}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </Card>
}

export default AddNewUserForm;