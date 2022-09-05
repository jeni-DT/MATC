import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';




import './App.css';

import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
         
        
         <Route path="/main" element={<Main />} />
         <Route path='/login' element={<LoginMain/>}/>
         
        
       </Routes>
    </div>
  );
}

export default App;
