import React from 'react';
import {TodoListItem} from './TodoListItem';

interface Props {

    todos: Todo[];
    toggleTodo: ToggleTodo;

}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
        <ul>
            {todos.map(todo =>(
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
                
                ))}

        </ul>
                </div>

    )
}