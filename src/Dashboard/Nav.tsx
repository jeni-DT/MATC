
import React from 'react'
import { Link } from 'react-router-dom';




const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <h2 className='name'>TreZzoH</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a href='#home' className="nav-link active">Home</a>
              </li>
              <a href='#available' className="nav-link active">Available</a>


              <li className="nav-item">

                <a href='#about' className="nav-link active">About</a>
              </li>
              <li className="nav-item">

                <a href='#contact' className="nav-link active">Contact</a>
              </li>
              <li className="nav-item">

                <a href='/home' className="nav-link active">Booked</a>
              </li>
              <div className='signup'>
                <Link to="/main">
                  <button type="button" className="btn btn-danger">SignUp</button>
                </Link>
              </div>
              <div className='loginnav'>
                <Link to='/login'>
                  <button type="button" className="btn btn-dark ">Login</button>
                </Link>
              </div>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav