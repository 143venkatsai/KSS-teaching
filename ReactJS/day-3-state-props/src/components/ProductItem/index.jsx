import React from "react";
import { MdDelete } from "react-icons/md";

import "./index.css";

const ProductItem = (props) => {
  const { productDetails } = props;
  const { strCategory, strCategoryThumb } = productDetails;
  return (
    <li>
      <div>
        <h5>{strCategory}</h5>
        <img src={strCategoryThumb} alt={strCategory} />
        <br />
        <MdDelete className="icon" />
      </div>
    </li>
  );
};

export default ProductItem;
