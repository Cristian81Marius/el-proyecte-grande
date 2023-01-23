import {Link} from 'react-router-dom';
//import classes from './MainNavigation.module.css';
import './Layout/Layout.module.css'
import { FaHome } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import classes from './Layout/Layout.module.css'
import { Button } from 'bootstrap';
import React, {useState} from 'react';

function MainNavigation(){
    const [show, setShow] = useState(false);

    function LoginOrLogout(){
        // TO DO verifica daca este in sesiune
        if(1==1){
            return <Link to='/login'><BsHeart /> Login</Link>;
        }else{
            return <Link to='/login'><BsHeart /> Logout</Link>;
        }
    }
    return <div className={classes.sidebar}>
     <header>
        <div>Kanta</div>
        </header>
        <nav>
            <ul>
                <li>
                <Link to='/'><FaHome />  Home</Link>
                </li>
                <li>
                    <Link type="button" onClick={()=> setShow(!show)}> Vizualizeaza</Link>
                </li>
                    {
                        show && <ul>
                            <li>
                                <Link to='/patients'>Pacienti</Link>
                            </li>
                            <li>
                                <Link to='/employees'>Angajati</Link>
                            </li>
                        </ul>
                    }
                <li>
                    <Link to='/housing'>Locuinte</Link>
                </li>
            </ul>
            <ul>
                <li>
                    {LoginOrLogout()}
                </li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
        </div>
}

export default MainNavigation;