import React, { useImperativeHandle } from "react";

function CustomInput({ ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        alerthi: () => {
          alert("hi");
        },
      };
    },
    ["hi"]
  );
  return (
    <input ref={ref} style={{ backgroundColor: "orange", padding: 100 }} />
  );
}

export default React.forwardRef(CustomInput);
