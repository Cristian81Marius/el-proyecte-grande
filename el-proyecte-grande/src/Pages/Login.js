import Card from "../components/Aspect/Card";
// import {useRef} from 'react';


function Login(){
    // const emailInputRef = useRef();
    // const passwordInputRef = useRef();
    
    function submitHandler(event){
        console.log(event)
    }
    //     event.preventDefault();

    //     const enteredEmail = emailInputRef.current.value;
    //     const enteredPassword = passwordInputRef.current.value;
        
    //     const loginData = {
    //         email: enteredEmail,
    //         password: enteredPassword
    //     };
    // }
    return  <Card>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' required id='email'/>
            </div>
            <div>
                <label htmlFor="password">Passward</label>
                <input type="password" required id='password'/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </Card>
}

export default Login;
