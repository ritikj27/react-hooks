import React, { useDeferredValue, useMemo } from "react";

function List({ input }) {
  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i <= 20000; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]); // Include deferredValue in the dependency array

  return <>{list}</>; // Render the list directly instead of returning it
}

export default List;
