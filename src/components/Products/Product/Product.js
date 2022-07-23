import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-4" key={product.id}>
        <img src={product.image} className="card-img-top" height="200rem" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
          <p className="card-text fw-bold fs-2">${product.price} </p>
          <Link to={`/product/${product.id}`} onClick={() => loadCurrentItem(product)} className="btn btn-outline-info mb-4">View Item</Link><br></br>
          <Link to="#" onClick={() => addToCart(product.id)} className="btn btn-primary">Add To Cart</Link>
          
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
