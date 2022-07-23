import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 ">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-bold" to="/"><img className="m-3" src="/images/Logo.svg">
        </img>SWC Mart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Contacts</Link>
            </li>


          </ul>
          <div className="buttons">
            <Link to="/login" className='btn fs-4'>Login</Link>
            <Link to="/dashboard" className='btn fs-4'>Dashboard</Link>
            <Link to="/cart" className='btn fs-4'>Cart ({cartCount})</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
