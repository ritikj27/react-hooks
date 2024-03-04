import React, { useState } from "react";
import List from "./List";

function DeferredValueHook() {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>DeferredValueHook</h1>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <List input={input}/>
    </div>
  );
}

export default DeferredValueHook;
