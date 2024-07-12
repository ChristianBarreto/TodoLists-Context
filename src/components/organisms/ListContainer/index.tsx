import styles from './ListContainer.module.css'
import { useTodos, useTodosDispatch } from '../../../providers/todosProviders'
import TodoList from '../../molecules/TodoList';

export default function ListContainer() {
  const lists = useTodos();
  const dispatch = useTodosDispatch();

  console.log(lists);

  return (
    <div className={styles.container}>
      {lists.map(list => (
        <TodoList key={list.id} title={list.title} todos={list.todos} />
      ))}
      <div>
        <button onClick={(e) => dispatch({type: 'addList'})}>+ Add list</button>
      </div>
    </div>
  )
}
