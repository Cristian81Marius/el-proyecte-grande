import { useNavigate } from 'react-router-dom';
import Login from '../FormPages/Login';

function LoginHandler(){
    const navigate = useNavigate();

    function checkUser(userData){
        fetch(
            "http://localhost:50864/api/Login",
            ).then(() => {
                navigate('/');
            });
        }

    return <section>
        <Login checkLogin={checkUser}/>
    </section>
    }

export default LoginHandler;