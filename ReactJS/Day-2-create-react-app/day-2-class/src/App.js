import React from "react";
import Home from "./components/Home";

const App = () => {
  const user = "React";
  const version = "19";

  return (
    <div>
      <Home userDetails={user} versionDetail={version} />
    </div>
  );
};

export default App;
