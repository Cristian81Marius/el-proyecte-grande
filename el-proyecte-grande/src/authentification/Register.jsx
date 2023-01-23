import { Password } from "@mui/icons-material";
import axios from "../Pages/FetchRequest/axios";
import React, {useState, useEffect} from "react"


function Register(){
    const [email, setEmail] = useState("");
    const [passward, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    // useEffect(()=>{
    //     const data = {
    //         email: "user@example.com",
    //         passward: "string"
    //     }
    //     async function fetchData(){
    //         const request =  await axios.post('User/login', data)
    //         console.log(request['data'])
    //         setloadedLogin(request['data'])
    //         return request['data'];
    //         }
    //         fetchData();
    //     }, ['User/login'])
    
        // console.log(loadedLogin)

        // const onRegisterHandler = async() =>{
        //     const data = {
        //                 email: email,
        //                 passward: passward,
        //                 confirmPassword: confirmPassword
        //             }
        //         await fetch(
        //             "http://localhost:50864/api/User/register",
        //             {
        //                 method: 'POST',
        //                 body: JSON.stringify(data),
        //                 headers:{
        //                     'Content-Type':'application/json'
        //                 }
        //             }
        //         ).then(() => {
        //             console.log(data);
        //         });
            
        //     }
    const onRegisterHandler = async() =>{
        const data = {
            email: email,
            passward: passward
        }
        await axios.post('User/register',data
        ).then(function (response) {
            console.log(response)
            sessionStorage.setItem("userEmail", response.data["Email"])
            window.location.replace('/');
          }).catch(function (error) {
            console.log(error);
          })
        }


    return (
        <form onSubmit={onRegisterHandler}>
            <label hrmlfor="email">email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type= "email" placeholder="exemple@gmail.com" id="email" name="email"></input>
            <label hrmlfor="passward">passward</label>
            <input value={passward} onChange={(e)=> setPassword(e.target.value)} type= "password" htmlFor="password" id="password" name="password"></input>
            <label hrmlfor="confirmPassword">confirmPassword</label>
            <input value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type= "password" htmlFor="confirmPassword" id="confirmPassword" name="confirmPassword"></input>
            <button type="submit">Log In</button>
        </form>
    )
}

export default Register;