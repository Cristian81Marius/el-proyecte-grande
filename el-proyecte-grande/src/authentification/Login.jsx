import { Password } from "@mui/icons-material";
import axios from "../Pages/FetchRequest/axios";
import React, {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(()=>{
        // const onLoginHandler = async() =>{
        // const data = {
        //     email: email,
        //     password: password
        // }
        // async function fetchData(){
        //     const request =  await axios.post('Account/login', data)
        //     console.log(request['data'])
        //     setloadedLogin(request['data'])
        //     return request['data'];
        //     }
        //     fetchData();
        // // }, ['User/login'])
        // }
        // console.log(loadedLogin)

        const onLoginHandler = async(e) =>{
            e.preventDefault();
            const data = {
                        email: email,
                        password: password
                    }
                await fetch(
                    "http://localhost:50864/api/Account/login",
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers:{
                            'Content-Type':'application/json'
                        }
                    }
                ).then((response) => {
                    console.log(response);
                });
            }

    // const onLoginHandler = async(e) =>{
    //     e.preventDefault();
    //     const data = {
    //         email: email,
    //         password: password
    //     }
    //     await axios.post('Account/login',data
    //     ).then(function (response) {
    //         console.log(response)
    //         // sessionStorage.setItem("userEmail", response.data["Email"])
    //       }).catch(function (error) {
    //         console.log(error);
    //         // window.location.replace('/');
    //       })
    //     }


    return (
        // <form onSubmit={(e) => onLoginHandler(e)}>
        //     <label hrmlfor="email">email</label>
        //     <input value={email} onChange={(e)=> setEmail(e.target.value)} type= "email" placeholder="exemple@gmail.com" id="email" name="email"></input>
        //     <label hrmlfor="passward">passward</label>
        //     <input value={passward} onChange={(e)=> setPassword(e.target.value)} type= "password" htmlFor="password" id="password" name="password"></input>
        //     <button type="submit">Log In</button>
        // </form>
        <Card className="text-center" style={{ width: '18rem' , marginLeft: "auto", marginRight: "auto", marginTop:"auto"}}>
        <Form onSubmit={(e) => onLoginHandler(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresa de email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Parola</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    )
}

export default Login;