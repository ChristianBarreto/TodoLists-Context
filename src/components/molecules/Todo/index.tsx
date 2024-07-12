import Input from "../../atoms/Input";
import { Todo as TodoInt } from "../../../types/types";
import styles from './Todo.module.css';

export default function Todo({text, isActive}: Omit<TodoInt, 'id'>) {
  const handleChange = () => {

  }

  return (
    <div className={styles.container}>
      <Input value={isActive} type="checkbox" />
      <Input value={text} className={styles.input} placeholder="Type a task" />
      <button>✕</button>
    </div>
  )
}