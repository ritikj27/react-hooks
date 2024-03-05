import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";

function Form() {
    const [value,setValue] = useState('')
    const inputref = useRef()
  return (
    <div>
      <CustomInput ref={inputref} value={value} onChange={(e)=>setValue(e.target.value)}/>
      <br/>
      <button onClick={(e)=>inputref.current.alerthi()}>focus</button>
    </div>
  );
}

export default Form;
