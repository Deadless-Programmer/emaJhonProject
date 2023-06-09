import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props)
  const { img, name, price, ratings, seller } = props.product;

  const addTocartItem = props.addTocartItem;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="title-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller} </p>
        <p>Rating : {ratings} star </p>
      </div>
      <button onClick={()=>addTocartItem(props.product)} className="btn-cart">Add to cart </button>
    </div>
  );
};

export default Product;
