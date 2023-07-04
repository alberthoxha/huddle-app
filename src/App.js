import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([1, 2, 3]);
  const onChange = (event) => {
    setData([...data, Number(event.target.value)]);
    console.log(data);
  };
  return (
    <>
      <input type="text" onChange={onChange} />
      {data}
    </>
  );
};

export default App;
