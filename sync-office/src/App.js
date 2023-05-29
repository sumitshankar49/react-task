import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { Routes ,Route} from 'react-router-dom';
import Category from './components/Category';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {


  
 

 
  return (
    <div className='container-fluid'>

      <Header></Header>
    
    <div className='row my-2'>
   
    <div className='col-1'>
      <Sidebar></Sidebar>
    </div>
    <div className='col'>
    <Routes>
      <Route path='/' element={<Home  />}/>
      <Route path='/category' element={<Category/>}/>
    </Routes>
    </div>

    </div>
    </div>

  );
}

export default App;
