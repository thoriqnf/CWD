import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("thoriq");
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("thor")}>change me to thor</button>
    </div>
  );
};

export default App;
