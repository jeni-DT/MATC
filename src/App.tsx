import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './Admin/components/Login/LoginMain';
import Main from './Admin/components/Register/Main';
import './App.css';


import View from './ReduxCrud/pages/View';
import Home from './ReduxCrud/pages/Home';

import { LazyLoad } from './Admin/components/Lazyload';
import { UserContext } from './Dashboard/Dashboard';
import Edit from './ReduxCrud/pages/Edit';
import Feedback from './Dashboard/Feedback/Feedback';
import { ErrorBoundaries } from './ErrorBoundaries/Errorboundaries';

const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const Car = React.lazy(() => import("./Dashboard/Car/Car"));
const Contact = React.lazy(() => import("./Dashboard/Contact/Contact"));
const About = React.lazy(() => import("./Dashboard/About/About"));
function App() {

  const firstText = 'TreZzoH'
  return (
    <ErrorBoundaries>
    <UserContext.Provider value={firstText}>
      <div className="App">
       

        
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
      
      
      </div>
    </UserContext.Provider>
    </ErrorBoundaries>
  );
}

export default App;
