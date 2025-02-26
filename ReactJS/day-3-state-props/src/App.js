import React, { useState } from "react";
// import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  // console.log(count.name);
  // console.log(setCount);

  // let user = {
  //   name: "",
  //   email: "",
  // };

  // const increment = () => {};

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted successfully", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
