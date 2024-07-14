import styles from './ListContainer.module.css'
import { useTodos, useTodosDispatch } from '../../../providers/todosProviders'
import TodoList from '../../molecules/TodoList';
import { List } from '../../../types/types';

export default function ListContainer() {
  const lists = useTodos();
  const dispatch = useTodosDispatch();
  console.log(lists)
  return (
    <div className={styles.container}>
      {lists.map((list: List) => (
        <TodoList key={list.id} id={list.id} title={list.title} todos={list.todos} />
      ))}
      <div>
        <button onClick={() => dispatch({type: 'addList'})}>+ Add list</button>
      </div>
    </div>
  )
}
