import React from 'react'
import { TodoItem } from '../MyComponents/TodoItem';
export const Todos = ({todos, onDelete}) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
       
      })}
      
    </div>
  )
}
