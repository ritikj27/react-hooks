import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectHook() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const buttonRef = useRef();

  // useLayout as same as useEFfect in define them
//differnce between them that useLayout not asyncournous
  useLayoutEffect(() => {
    if (popup.current == null || buttonRef.current == null) return;
    const { top } = buttonRef.current.getBoundingClientRect();
    popup.current.style.top = `${top + 50}px`;
  }, [show]);

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is popup
        </div>
      )}
    </>
  );
}

export default LayoutEffectHook;
