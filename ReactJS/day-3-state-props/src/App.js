import React from "react";
import ProductItem from "./components/ProductItem";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 5.99,
    description: "This is product 2",
    image: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.99,
    description: "This is product 3",
    image: "https://picsum.photos/200/302",
  },
];

const App = () => {
  // for (let product of productsData) {
  //   console.log(product);
  // }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productsData.map((product, index) => (
          <ProductItem productDetails={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
