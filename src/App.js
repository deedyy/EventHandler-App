import React, {useState} from 'react';
import './App.css';
//importing Components
import TodoForm from './Components/Todoform';
import Todolist from './Components/TodoList';


function App() {
  const [ inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState("all");
  
  return (
    <div className="App">
      <header>
        Howdy! What would you like to do today?
        
      </header>
      <TodoForm inputText={inputText} todos={todos} setTodos={setTodos} 
      setInputText={setInputText} setStatus={setStatus} status={status} 
      />
      <Todolist todos={todos} setTodos={setTodos} />
    
    </div>
  );
}

export default App;
