import { Password } from "@mui/icons-material";
import axios from "../Pages/FetchRequest/axios";
import React, {useState, useEffect} from "react"

function GetToken(){

    const [email, setEmail] = useState("");

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

        const onTokenHandler = async() =>{
            const data = {
                        email: email,
                    }
                await fetch(
                    "http://localhost:50864/api/User/GetTokenForPassword",
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers:{
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type':'application/json'
                        }
                    }
                ).then(() => {
                    console.log(data);
                });
            
            }

    // const onTokenHandler = async() =>{
    //     const data = {
    //         email: email,
    //     }
    //     await axios.post('User/GetTokenForPassword',data
    //     ).then(function (response) {
    //         console.log(response)
    //         sessionStorage.setItem("userEmail", response.data["Email"])
    //         window.location.replace('/');
    //       }).catch(function (error) {
    //         console.log(error);
    //       })
    //     }


    return (
        <form onSubmit={onTokenHandler}>
            <label hrmlfor="email">email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type= "email" placeholder="exemple@gmail.com" id="email" name="email"></input>
            <button type="submit">Send Token</button>
        </form>
    )
}

export default GetToken;