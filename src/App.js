import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, addTodo,removeLastTodo} from "./toolkit/toolkitSlice"


function App() {
const todos = useSelector((state)=>state.toolkit.todos);
const count = useSelector((state) => state.toolkit.count);
const dispatch = useDispatch();

  return (
    <div className="App">
    <h1>counter :{count}</h1>
    <button onClick={()=>dispatch(increment())}>inkrement</button>
    <button onClick={()=>dispatch(decrement())}>dekrement</button>
     <button onClick={()=>dispatch(addTodo(prompt()))}>add todo</button>
     <button onClick={()=>dispatch(removeLastTodo())}>remove todo</button>
    {todos.map(todo=>(<h1 key={todo}>{todo}</h1>))}
    </div>
  );
}

export default App;


