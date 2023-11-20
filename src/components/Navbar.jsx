import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './navbar.css';
import { Main } from './Main/Main';
import '../components/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-bar'>
      <nav className="navbar navbar-expand-sm navbar-white" style={{ background: "rgb(93, 3, 153)" }}>
        <div className="container-fluid" >
          <a href="/" className="navbar-brand">
            <i className="bi bi-currency-exchange fs-1 text-warning"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <li className="nav-item">
                <a href="/dashboard" className="btn me-5 text-white" style={{ fontWeight: 'bolder', fontSize: '25px', textDecoration: 'none' }}>
                  Authorization
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Main />
    </div>
  );
};

export default Navbar;


