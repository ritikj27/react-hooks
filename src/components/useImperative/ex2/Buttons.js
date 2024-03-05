import React, { useRef, useState } from "react";
import ConfirmationModel from "./ConfirmationModel";

function Buttons() {
  const [open, setOpen] = useState(false);
  const modelref = useRef();
  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <button onClick={() => modelref.current.closeFocus()}>foucs close</button>
      <button onClick={() => modelref.current.confirmFocus()}>
        foucs confirm
      </button>
      <button onClick={() => modelref.current.denyFocus()}>foucs deny</button>
      <ConfirmationModel
        ref={modelref}
        isOpen={open}
        onClose={() => setOpen(!open)}
      />
    </div>
  );
}

export default Buttons;
