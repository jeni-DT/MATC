import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';
import global from './styles/global';
import './App.css';

import UsemediaQuery from './usemediaQuery';
import View from './ReduxCrud/pages/View';
import Home from './ReduxCrud/pages/Home';
import Edit from './ReduxCrud/pages/Edit';
// import Sidebar from './Admin/Sidebar/Index';
import { LazyLoad } from './Admin/components/Lazyload';
import Global from './styles/global';


const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
// const Navbar = React.lazy(() => import("./Admin/Navbar/Index"));
const Car = React.lazy(() => import("./Dashboard/Car/Car"));
const Contact = React.lazy(() => import("./Dashboard/Contact/Contact"));
const About = React.lazy(() => import("./Dashboard/About/About"));
function App() {
  // const matches = UsemediaQuery("(min-width:200px)");
  return (
    <div className="App">
      <Global/>
      {/* {matches ? */}
      <Routes>
         
        
         <Route path="/main" element={<Main />} />
         <Route path='/login' element={<LoginMain/>}/>
         <Route path='/' element={<Suspense fallback={<LazyLoad />}>
              <Dashboard/>
            </Suspense>}/>
         <Route path='/view' element={<View/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/edit/:id' element={<Edit/>}/>
         {/* <Route path='/admin' element={<Suspense fallback={<LazyLoad />}> */}
              {/* <Navbar/> */}
            {/* </Suspense>}/> */}
         {/* <Route path='/sidebar' element={<Sidebar/>}/> */}
         <Route path='/car' element={<Suspense fallback={<LazyLoad />}>
              <Car/>
            </Suspense>}/>
         <Route path='/contact' element={<Suspense fallback={<LazyLoad />}>
              <Contact/>
            </Suspense>}/>
         <Route path='/about' element={<Suspense fallback={<LazyLoad />}>
              <About/>
            </Suspense>}/>
            
         
        
       </Routes>
{/* :"hello"} */}
    </div>
  );
}

export default App;
