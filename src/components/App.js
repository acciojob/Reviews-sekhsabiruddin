import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const arr = ["Tab 1", "Tab 2", "Tab 3"];
  const [click, setClick] = useState("");

  const handleTabClick = (details) => {
    setClick(details);
  };

  return (
    <div>
      <ul>
        {arr.map((details, index) => (
          <li key={index} onClick={() => handleTabClick(details)}>
            {details}
          </li>
        ))}
      </ul>
      <p>This is the content for {click}</p>
    </div>
  );
};

export default App;
