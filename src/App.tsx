import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';

import './App.css';

import UsemediaQuery from './usemediaQuery';
import Dashboard from './Dashboard/Dashboard';
import View from './ReduxCrud/pages/View';
import Home from './ReduxCrud/pages/Home';
import Edit from './ReduxCrud/pages/Edit';
import Navbar from './Admin/Navbar/Index';
import Sidebar from './Admin/Navbar/Sidebar.tsx/Index';
import Car from './Dashboard/Car/Car';
import Contact from './Dashboard/Contact/Contact';
import About from './Dashboard/About/About';



function App() {
  // const matches = UsemediaQuery("(min-width:200px)");
  return (
    <div className="App">
      {/* {matches ? */}
      <Routes>
         
        
         <Route path="/main" element={<Main />} />
         <Route path='/login' element={<LoginMain/>}/>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/view' element={<View/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/edit/:id' element={<Edit/>}/>
         <Route path='/admin' element={<Navbar/>}/>
         <Route path='/sidebar' element={<Sidebar/>}/>
         <Route path='/car' element={<Car/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         
        
       </Routes>
{/* :"hello"} */}
    </div>
  );
}

export default App;
