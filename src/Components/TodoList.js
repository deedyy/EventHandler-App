import React from "react";
//importing components
import Todo from './Todo'



const Todolist = ({todos,setTodos}) => {

     return (
         <div className="todo-container">
          <ul className="todo-list">
          {todos.map((todo) =>(
          <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text} />
            ) )}
            
          </ul>
         </div>
  );
};

export default Todolist;