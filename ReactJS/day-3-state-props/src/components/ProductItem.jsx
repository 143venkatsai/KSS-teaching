import React from "react";

const ProductItem = (props) => {
  //   console.log(props);
  const { productDetails } = props;
  const { name, price, description, image } = productDetails;

  return (
    <li>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p> Description: {description}</p>
      <img src={image} alt={name} />
    </li>
  );
};

export default ProductItem;
