import { Todo as TodoInt } from "../../../types/types";
import styles from './Todo.module.css';
// import { useTodosDispatch } from "../../../providers/todosProviders";
import { classNames } from "../../../helpers/helpers";
import { useTodos } from "../../../providers/todosProviders";

interface Props extends TodoInt {
  listId: number
}

export default function Todo({id, text, isActive, listId}: Props) {
  // const dispatch = useTodosDispatch();
  const [, dispatch] = useTodos()

  return (
    <div className={styles.container}>
      <input
        checked={!isActive}
        type="checkbox"
        onChange={() => dispatch({
          type: 'changeTodoInAList',
          listId: listId,
          todo: {id: id, text: text, isActive: !isActive}
        })}
        disabled={!text}
      />

      <input
        value={text}
        className={classNames(
          styles.input,
          !isActive && styles.todoInactive
        )}
        placeholder="Type a task"
        onChange={(e) => dispatch({
          type: 'changeTodoInAList',
          listId: listId,
          todo: {id: id, text: e.target.value, isActive: isActive}
        })}
      />

      <button onClick={() => dispatch({type: "deleteTodo", listId: listId, todoId: id})}>✕</button>
    </div>
  )
}