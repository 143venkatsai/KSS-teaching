import React from "react";
import { MdDelete } from "react-icons/md";

import "./index.css";

const ProductItem = (props) => {
  const { productDetails, onDelete } = props;
  const { idCategory, strCategory, strCategoryThumb } = productDetails;

  const handleDelete = () => {
    onDelete(idCategory, strCategory);
  };

  return (
    <li>
      <div>
        <h5>{strCategory}</h5>
        <img src={strCategoryThumb} alt={strCategory} />
        <br />
        <MdDelete className="icon" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default ProductItem;
