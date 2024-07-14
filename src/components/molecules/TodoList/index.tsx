import { List } from "../../../types/types";
import Todo from "../Todo";
import styles from './TodoList.module.css'
import IconTrash from "../../atoms/IconTrash";
import { useTodosDispatch } from "../../../providers/todosProviders";

export default function TodoList({
  id,
  title,
  todos
}: List) {
  const dispatch = useTodosDispatch();

  return (
    <div className={styles.container}>
      <input
        value={title}
        className={styles.input}
        placeholder="Title"
        onChange={(e) => dispatch({
          type: 'changeList',
          list: {id: id, title: e.target.value, todos: todos}
        })}
      />    
      <button
        className={styles.deleteButton}
        onClick={() => dispatch({
          type: 'deleteList',
          list: {id: id, title: title, todos: todos}
        })}
      >
        <IconTrash />
      </button>

      <hr className={styles.spacer}/>     

      {todos.filter(todo => todo.isActive).map(todo => (
        <Todo
          key={todo.id}
          listId={id}
          id={todo.id}
          text={todo.text}
          isActive={todo.isActive}
        />
      ))}

      <button onClick={() => dispatch({type: 'newTodo', listId: id})}>Add item</button>

      {!!todos.filter(todo => !todo.isActive).length && <hr  className={styles.spacer}/>}

      {todos.filter(todo => !todo.isActive).map(todo => (
        <Todo
          key={todo.id}
          listId={id}
          id={todo.id}
          text={todo.text}
          isActive={todo.isActive}
        />
      ))}

    </div>
  )
}