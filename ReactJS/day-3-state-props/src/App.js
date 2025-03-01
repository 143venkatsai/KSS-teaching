import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  console.log(isTrue);

  // const renderAuth = () => {
  //   if (isTrue) {
  //     return <button onClick={handleClick}>Logout</button>;
  //   } else {
  //     return <button onClick={handleClick}>Login</button>;
  //   }
  // };

  // renderAuth();

  return (
    <div className="container">
      <h1>My App</h1>
      {/* {renderAuth()} */}

      {/* Ternary Opeartor  */}
      {/* {isTrue ? (
        <button onClick={handleClick}>Logout</button>
      ) : (
        <button onClick={handleClick}>Login</button>
      )} */}
      {/* <button onClick={handleClick}>{isTrue ? "Logout" : "Login"}</button> */}

      {/* Logical && Operator  */}
      {!isTrue && <button onClick={handleClick}>Login</button>}
      {isTrue && <button onClick={handleClick}>Logout</button>}
    </div>
  );
};

export default App;
