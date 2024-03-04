// 1.) UseReducer hook gives us an array  of [state,dispatch] same as useState hook and use Reducer itself takes an reducer function , inital state.
// 2.) Whenver we runs an dispatch function the reducer function get's triggered and with the help of reducer function we can update new state.
// 3.) Reducer function takes 2 arguments which is the current state and action and the parameter action is used to write the logic based on the dispatch action type.
// 4.) Dispatch function takes an object (action)  which contains two things action_type the action which we want to perform and also it takes payload which contains all the variables which we want to pass to over reducer function.

import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add todo",
  DELETE_TODO: "delete todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  switch (action.type) {

    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload)];

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id != action.payload);

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

function TodoReducer() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: name });
    setName("");
    console.log(todos);
  };
  return (
    <div>
      <h1>TodoReducer</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>add</button>
      </form>

      {todos.length > 0 &&
        todos.map((todo) => (
          <div key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : "none" }}>
            <h1>{todo.name}</h1>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
              }
            >
              delete
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id:todo.id} })
              }
            >
              toggle
            </button>
          </div>
        ))}
    </div>
  );
}

export default TodoReducer;
