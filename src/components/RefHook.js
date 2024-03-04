import React, { useEffect, useRef, useState } from "react";

// Just keep three things in mind.
// 1. useState() causes re-render.
// 2. useRef() DOESN'T cause re-render.
// 3. useEffect() runs AFTER render.
function RefHook() {
  const [name, setName] = useState("");
  //   const [renderCount, setRenderCount] = useState(0);
  const prevInput = useRef();

  useEffect(() => {
    // setRenderCount(prev=>prev+1)
    console.log("hello world");
    // console.log(name);
    prevInput.current = name;
    // console.log(prevInput.current)
  }, [name]);

  console.log("render comp");
  return (
    <div>
      <h1>RefHook</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          console.log("now value of name value");
          setName(e.target.value);
          console.log("succes now value of name value");
        }}
      />
      <div>
        My name is {name} and prev name is {prevInput.current}
      </div>
    </div>
  );
}

export default RefHook;
