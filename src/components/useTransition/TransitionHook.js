import React, { useState, useTransition,useDeferredValue } from "react";

// without transition it rendering  at once
// tranistion it render 2 times
function TransitionHook() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChnage = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i <= 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <div>
      <h1>TransitionHook</h1>

      <input type="text" value={input} onChange={handleChnage} />
      {isPending ? <h1>Loading...</h1> : list.map((id) => (
        <h1>{id}</h1>
      ))}
    </div>
  );
}

export default TransitionHook;
