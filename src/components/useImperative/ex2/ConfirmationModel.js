import { isEditable } from '@testing-library/user-event/dist/utils'
import React, { useImperativeHandle, useRef } from 'react'

function ConfirmationModel({isOpen,onClose},ref) {
    const closeRef = useRef()
    const confRef = useRef()
    const denyRef = useRef()
    useImperativeHandle(ref,()=>{
        return {
            closeFocus:()=>{
                closeRef.current.focus();
            },
            confirmFocus:()=>{
                confRef.current.focus()
            },
            denyFocus:()=>{
                denyRef.current.focus()
            }
        }
    })

if(!isOpen) return null;
  return (
    <div>
        <h1>Model</h1>
        <button ref={closeRef} onClick={onClose}>X</button>
        <h1>hello world</h1>
        <div>
            <button ref={confRef}>yes</button>
            <button ref={denyRef}>no</button>
        </div>
    </div>
  )
}

export default React.forwardRef(ConfirmationModel)
