
import './App.css';
import Home from './MyComponents/pages/home/Home';
import React, {useState} from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Profile from './MyComponents/Profile';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 
  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>


</Routes>
</BrowserRouter>
   
    </>
  );
}

export default App;
