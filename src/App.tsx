import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';

import './App.css';

import UsemediaQuery from './usemediaQuery';
import Dashboard from './Dashboard/Dashboard';
import View from './ReduxCrud/pages/View';



function App() {
  const matches = UsemediaQuery("(min-width:600px)");
  return (
    <div className="App">
      {matches ?
      <Routes>
         
        
         <Route path="/main" element={<Main />} />
         <Route path='/login' element={<LoginMain/>}/>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/view' element={<View/>}/>
         
        
       </Routes>
:"hello"}
    </div>
  );
}

export default App;
