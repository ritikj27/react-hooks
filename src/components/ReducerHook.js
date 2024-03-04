import React, { useReducer, useState } from "react";

const ACTIONS = {
    INC:'increment',
    DEC:'decrement'
}

function reducer(state,action){
    switch(action.type){
        case ACTIONS.INC :
            return {count:state.count + 1}
        case ACTIONS.DEC :
            return {count:state.count - 1}
    }
}

function ReducerHook() {

const [state,dispatch] = useReducer(reducer,{count:0})

  return (
    <div>
      <h2>Select a value:</h2>
      <button onClick={()=>dispatch({type:ACTIONS.INC})}>+</button>
      <div>{state.count}</div>
      <button onClick={()=>dispatch({type:ACTIONS.DEC})}>-</button>
    </div>
  );
}

export default ReducerHook;
