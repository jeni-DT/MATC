import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Dashboard.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Foot from './Footer';
import Carousel from 'react-bootstrap/Carousel';

 const Dashboard=()=> {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="header">
          {/* <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/menu">SignUp</Nav.Link> */}
            <NavDropdown title="Admin" className='admin' id="basic-nav-dropdown">
              <NavDropdown.Item href="/main">SignUp</NavDropdown.Item>
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
     
      <div className='container'>
  <div className="row">
    <div className="col">
    <UncontrolledExample/>
    <Details/>
    </div>
  
  </div>
  
</div>
      <footer>
      <Foot/>
      </footer>
     
    </>
    
  );
}
  export function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1148215/pexels-photo-1148215.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
     
    );
  }
   
   export const Details=()=>{
    return(
      <div className="container">
  <div className="row">
    <div className="col">
      1 of 3
    </div>
    <div className="col-6">
      2 of 3 (wider)
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
</div>
    )
   }

export default Dashboard;


 