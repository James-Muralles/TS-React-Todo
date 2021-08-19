import React, {useState} from 'react';
import {TodoListItem} from './TodoListItem'
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import './styles.scss';



const initialTodos: Todo[] = [
  {
    text: 'Walk the dog', complete: false,
  },
   {
     text: 'Write app', complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodos: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodos){
          return {
            ...todo,
            complete: !todo.complete,
          };

      }
      return todo;

    })
    setTodos(newTodos)

  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  }
  return (
  <div className='container'>
   <div className='todo-list'>
  <TodoList todos={todos} toggleTodo={toggleTodo}/>
  <AddTodoForm addTodo={addTodo}/>
   </div>
  </div>
  )
}

export default App;
