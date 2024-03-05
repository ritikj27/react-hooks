import React, { useId } from "react";

export default function () {
    const id = useId()
  return (
    <div>
      <label htmlFor={id}>email</label>
      <input id={id} placeholder="email"/>
    </div>
  );
}
