import styles from './ListContainer.module.css'
import { useTodos, useTodosDispatch } from '../../../providers/todosProviders'
import TodoList from '../../molecules/TodoList';
import { List } from '../../../types/types';

export default function ListContainer() {
  const lists = useTodos();

  return (
    <div className={styles.container}>
      {lists.map((list: List) => (
        <TodoList key={list.id} id={list.id} title={list.title} todos={list.todos} />
      ))}
    </div>
  )
}
