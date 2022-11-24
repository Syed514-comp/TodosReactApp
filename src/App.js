
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import React, {useState} from 'react';

function App() {
    const onDelete = (todo)=>{
      // console.log("i am on Dleete of todo", todo);
      // let index= todos.indexOf(todo);
      // todos.splice(index, 1);
      setTodos(todos.filter((e)=>{
        return e!==todo;


      }));
    }
  
    const [todos, setTodos]= useState([
      {
        sno: 1,
        title: "go to the market",
        desc: "You need to the market to get this job done"
      },

      {
        sno: 2,
        title: "go to the mall",
        desc: "You need to the market to get this job done"
      },

      {
        sno: 3,
        title: "go to the ghat",
        desc: "You need to the market to get this job done"
      },
    ]);
    return (
    <>
    <Header />
   
    
    <Todos todos={todos} onDelet={onDelete}/>
    <Footer/>

    </>
    
    
  );
}

export default App;
