import {Link, redirect} from 'react-router-dom';
//import classes from './MainNavigation.module.css';
import './Layout/Layout.module.css'
import { FaHome } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import classes from './Layout/Layout.module.css'
import React, {useState,Component} from 'react';
import { Confirm } from 'semantic-ui-react'
import { faL } from '@fortawesome/free-solid-svg-icons';
import Login from '../authentification/Login';
import Cookies from 'js-cookie';
import Register from '../authentification/Register';
import { useSignOut } from 'react-auth-kit';
import RoleAcces from "../authentification/Permision"

function MainNavigation(){
    const [show, setShow] = useState(false);

    const singOut = useSignOut()    
    function Logout(){
        // singOut()
        Cookies.remove("id");
        Cookies.remove("email");
        Cookies.remove("role");
        Cookies.remove("token")
        window.location.replace('/')
        }

    return <div className={classes.sidebar}>
     <header>
        <div>Kanta</div>
        </header>
        <header>
        <div>{Cookies.get("email") != null && <>{Cookies.get("email")}</>}</div>
        </header>
        <nav>
            <ul>
                <li>
                <Link to='/'><FaHome />  Home</Link>
                </li>
                {Cookies.get("email") != null &&
        <>
                <li>
                    <Link type="button" onClick={()=> setShow(!show)}> Vizualizeaza</Link>
                </li>
                    {
                        show && <ul>
                            <li>
                                <Link to='/patients'>Pacienti</Link>
                            </li>
                            {!RoleAcces("Patient") &&
                            <li>
                                <Link to='/employees'>Angajati</Link>
                            </li>
                            }
                        </ul>
                    }
                <li>
                    <Link to='/housing'>Locuinte</Link>
                </li>
                </>}
            </ul>
            <ul>
                {Cookies.get("email") == null &&
                <li>
                    <Login/>
                </li>
}
            {Cookies.get("email") != null &&
                <li>
                    <Link type='button' onClick={Logout}><BsHeart /> Logout</Link>;
                </li>}
                {RoleAcces("Admin") &&
                <li><Register/></li>
            }
            </ul>
        </nav>
        </div>
}

export default MainNavigation;