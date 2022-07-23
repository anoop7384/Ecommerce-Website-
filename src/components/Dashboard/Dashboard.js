import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Dashboard = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (

    <>
      <div className='container row mx-auto' >
        <div className="card col-3" width=" 18rem;">
          <div className="card-body ">
            <h5 className="card-title">Cart</h5>
            <p className="card-text">{cartCount}</p>
            <Link to="/cart" className="btn btn-primary">Go To Cart</Link>
          </div>
        </div>
        <div className="card col-3" width=" 18rem;">
          <div className="card-body">
            <h5 className="card-title">Wishlist</h5>
            <p className="card-text">0</p>
            <Link to="/wishlist" className="btn btn-primary">Go To Wishlist</Link>
          </div>
        </div>
        <div className="card col-3" width=" 18rem;">
          <div className="card-body">
            <h5 className="card-title">Wallet Balance</h5>
            <p className="card-text">$500</p>
            <a href="#" className="btn btn-primary">Add More Money</a>
          </div>
        </div>
        <div className="card col-3" width=" 18rem;">
          <div className="card-body">
            <h5 className="card-title">Total Orders</h5>
            <p className="card-text">0</p>
            <a href="#" className="btn btn-primary">Order History</a>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Dashboard);