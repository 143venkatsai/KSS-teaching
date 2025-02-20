import React from "react";

const Home = (props) => {
  const { userDetails, versionDetail } = props;

  const user = {
    name: "Sai",
    age: 30,
  };

  const { name } = user;
  console.log(name);

  return (
    <div className="home">
      <h1>
        Welcome to {userDetails} App Version {versionDetail}{" "}
      </h1>
    </div>
  );
};

export default Home;
