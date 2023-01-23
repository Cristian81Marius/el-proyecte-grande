import { useNavigate } from 'react-router-dom';
import AddNewUserForum from '../../FormPages/AddNewUserForm'

function AddUser(){
    const navigate = useNavigate();

    function onAddUSerHandler(userData){
        fetch(
            '/api/Admin/user',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }
    return <section>
        <h1>New User</h1>
        <AddNewUserForum onAddUser={onAddUSerHandler}/>
    </section>
}

export default AddUser;