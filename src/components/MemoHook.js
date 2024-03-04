import React, { useEffect, useMemo, useState } from "react";


// 2 common use cases of useMemo:

// 1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change

// 2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render

function MemoHook() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const cal = useMemo(() => heavyCal(num), [num]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme");
  }, [theme]);

  return (
    <div>
      <h1>MemoHook</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>changeTheme</button>
      <div
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        {cal}
      </div>
    </div>
  );
}

export default MemoHook;

function heavyCal(num) {
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
