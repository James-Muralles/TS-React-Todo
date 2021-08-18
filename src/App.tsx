import React, {useState} from 'react';
import {TodoListItem} from './TodoListItem'


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


  }
  return (
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </ul>

  );
}

export default App;
