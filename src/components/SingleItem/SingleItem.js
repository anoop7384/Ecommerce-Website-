import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart, addWish } from "../../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className="h-75 w-75 mx-auto">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="w-75 mx-auto">
          <img
            className="w-75 h-25 mx-auto"
            src={current.image}
            alt={current.title}
          />
          </div>
        </div>
        <div className="col-md-6  mt-5 pt-5">
          <p className="fs-2 fw-bold">{current.title}</p>
          <p className="fs-5">{current.description}</p>
          <p className="fs-3 fw-bold">$ {current.price}</p>

          <button
            onClick={() => addToCart(current.id)}
            className={styles.details__addBtn}
          >
            Add To Cart
          </button>
          <Link >
          <img onClick={()=>{
            
            const h=document.getElementById('heart');
            if(h.key==="0"){
              h.src="/images/heart2.jpg";
              h.key="1";
            }else{
              h.src="/images/heart1.jpg";
              h.key="0";
            }
            

          }} className="mx-2" id="heart" height="60rem" src="/images/heart1.jpg" key="0"></img>
          </Link>
          

        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
