import './App.css';
import {Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import Login from './Pages/Login';
import Login from './authentification/Login';

import Home from './Pages/Home';
import AllPatients from './Pages/UsersViews/Patients'

import AddPatient from './Pages/FetchRequest/Post/AddPatient';

import AllHousing from './Pages/UsersViews/Housing';
import AllEmployee from './Pages/UsersViews/Employee';
import Register from './authentification/Register';
import Buy from './Pages/Buy';
// import GetToken from './authentification/Permision';
import { RequireAuth } from 'react-auth-kit';
import Cookies from 'js-cookie';

function App() {

  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route path='/getToken' element={<GetToken/>}/> */}
        <Route path='/buy' element={<Buy/>}/>
        {Cookies.get("email") != null &&
        <>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/patients' element={<AllPatients/>}/>
        
        {/* <Route path='/addNewPatient' element={<AddPatient/>}/> */}
        {/* <Route path='/patient/:id' element={<Patient/>}/> */}
        <Route path='/housing' element={<AllHousing/>}/>
        <Route path='/employees' element={<AllEmployee/>}/>
        </>
      }
      </Routes>
    </Layout>
  );
}

export default App;
