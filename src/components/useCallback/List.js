import React, { useEffect, useState } from "react";

function List({ getElm }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    console.log("get")
    setArr(getElm());
  }, [getElm]);
  return (
    <div>
      {arr.map((a) => (
        <h1>{a}</h1>
      ))}
    </div>
  );
}

export default List;
