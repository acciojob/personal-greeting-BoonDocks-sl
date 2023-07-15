
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Enter your name:</p>
      <input onChange={handleInputChange} />
      <p>Hello {name}!</p>
    </div>
  );
};

export default App
