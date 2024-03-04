import { useCallback, useEffect, useMemo, useState } from "react";
import List from "./List";


// use callback return a function
// use memo return a value of function

// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable
function CallbackHook() {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const getElm = useCallback(() => {
    return [num, num + 2, num + 3];
  }, [num]);

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
       <List getElm={getElm} />
      </div>
    </div>
  );
}

export default CallbackHook;
