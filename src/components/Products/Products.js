import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className="container">
      <div className=" d-flex
      justify-content-center mb-5">
        <h1>All Products</h1>
      </div>
      <div className='row justify-content-center'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
