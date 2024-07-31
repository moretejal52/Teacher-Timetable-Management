// App.js
import React from 'react';
import Footer from './Timetable1/Footer';
import About from './Timetable1/About';
import Contact from './Timetable1/Contact';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes, } from 'react-router-dom';
import Registration from './Timetable1/Registration';
import Homepage from './Timetable1/Homepage';
import Navbar1 from './Timetable1/Navbar1';
import Login from './Timetable1/Login';
import MasterT from './Timetable1/MasterT';
import L1 from './Timetable1/L1'



const App = () => {
  return (
    <>

    <Navbar1/>
    
    <Routes>
      
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/timetable' element={<MasterT/>}/>
      <Route path='/l1' element={<L1/>}/>
      

      
     
      
      
    </Routes>
    
    
    
    
    </>
  );
};

export default App;