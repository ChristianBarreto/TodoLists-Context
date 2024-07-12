import Input from "../../atoms/Input";
import { List } from "../../../types/types";
import Todo from "../Todo";
import styles from './TodoList.module.css'
import IconTrash from "../../atoms/IconTrash";

export default function TodoList({
  title,
  todos
}: Omit<List, 'id'>) {

  return (
    <div className={styles.container}>
      <Input value={title} className={styles.input} placeholder="Title"/>
      <button className={styles.deleteButton}><IconTrash /></button>
      <hr className={styles.spacer}/>     

      {todos.filter(todo => todo.isActive).map(todo => (
        <Todo key={todo.id} text={todo.text} isActive={todo.isActive} />
      ))}
      <Todo text="" isActive={true} />

      {!!todos.filter(todo => !todo.isActive).length && <hr  className={styles.spacer}/>}

      {todos.filter(todo => !todo.isActive).map(todo => (
        <Todo key={todo.id} text={todo.text} isActive={todo.isActive} />
      ))}

    </div>
  )
}