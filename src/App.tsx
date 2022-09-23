import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';
import global from './styles/global';
import './App.css';

import UsemediaQuery from './usemediaQuery';
import View from './ReduxCrud/pages/View';
import Home from './ReduxCrud/pages/Home';

import { LazyLoad } from './Admin/components/Lazyload';
import Global from './styles/global';
import { UserContext } from './Dashboard/Dashboard';

import Edit from './ReduxCrud/pages/Edit';
import Feedback from './Dashboard/Feedback/Feedback';




const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
// const Navbar = React.lazy(() => import("./Admin/Navbar/Index"));
const Car = React.lazy(() => import("./Dashboard/Car/Car"));
const Contact = React.lazy(() => import("./Dashboard/Contact/Contact"));
const About = React.lazy(() => import("./Dashboard/About/About"));
function App() {
  // const matches = UsemediaQuery("(min-width:200px)");
  const firstText = 'TreZzoH'
  return (
    <UserContext.Provider value={firstText}>
      <div className="App">
       
        <Global />
        {/* {matches ? */}
        <Routes>
        
        

          <Route path="/main" element={<Main />} />
          <Route path='/login' element={<LoginMain />} />
          <Route path='/' element={<Suspense fallback={<LazyLoad />}>
            <Dashboard />
          </Suspense>} />
          <Route path='/view' element={<View />} />
          <Route path='/home' element={<Home />} />
          <Route path='/edit/:id' element={<Edit />} />

          <Route path='/car' element={<Suspense fallback={<LazyLoad />}>
            <Car />
          </Suspense>} />

          <Route path='/contact' element={<Suspense fallback={<LazyLoad />}>
            <Contact />
          </Suspense>} />
          <Route path='/about' element={<Suspense fallback={<LazyLoad />}>
            <About />
          </Suspense>} />
<Route path='/feedback' element={<Feedback/>}></Route>

        </Routes>
      
        {/* :"hello"} */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
