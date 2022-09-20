import './Dashboard.css';
import Foot from './Footer';
import Home from './Home/Home';
import Car from './Car/Car';
import Contact from './Contact/Contact';
import { useEffect, useState, createContext} from 'react';
import About from './About/About';
import Nav from './Nav';
import createAxios from '../Axios/Index';



export const UserContext = createContext('');
const Dashboard = () => {

  const [first, setFirst] = useState<any>([])
  useEffect(() => {
    createAxios
      .get("/auth/employees",)
      .then((response) => {
        setFirst(response?.data?.data?.employees);
        console.log(first);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>

      <Nav />
      <Home />
      <Car />
      <Contact />
      <About />

      <footer>
        <Foot />
      </footer>




    </>

  );
}


export default Dashboard;


