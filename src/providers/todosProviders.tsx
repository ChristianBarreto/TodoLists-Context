import { createContext, ReactNode, useContext, useReducer } from 'react';
import { List, Todo } from '../types/types';
import { nextId } from '../helpers/helpers';

interface Action {
  type: string,
  list: List,
  todo: Todo,
  listId: number,
  todoId: number
}

let initialLists: List[] = [];

if (localStorage.getItem("todoLists") === 'null'){
  localStorage.setItem("todoLists", JSON.stringify([]));
} else {
  initialLists = JSON.parse(localStorage.getItem("todoLists") as string)
  || [
    {id: 0, title: "My first list (edit me)", todos: [
      {id: 0, text: "My todo 1", isActive: true},
      {id: 1, text: "My todo 2", isActive: true},
      {id: 2, text: "My todo 3", isActive: false},
    ]},
    {id: 1, title: "My second list (edit me)", todos: [
      {id: 0, text: "My todo 1", isActive: true},
    ]}
  ];
}

const TodosContext = createContext<List[]>([]);

const TodosDispatchContext = createContext({});

export function TodosProvider({ children }: {children: ReactNode}) {
  const [lists, dispatch] = useReducer(
    tasksReducer,
    initialLists
  );

  localStorage.setItem("todoLists", JSON.stringify(lists));

  return (
    <TodosContext.Provider value={lists}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

function tasksReducer(lists: List[], action: Action) {
  switch (action.type) {
    case 'addList': {
      return [...lists, {
        id: nextId(lists),
        title: "",
        todos: []
      }];
    }
    case 'changeList': {
      return lists.map((list: List) => {
        if (list.id === action.list.id) {
          return action.list;
        } else {
          return list;
        }
      });
    }
    case 'deleteList': {
      return lists.filter((list: List) => list.id !== action.list.id);
    }
    case 'changeTodoInAList': {
      return lists.map((list: List) => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.map(todo => {
            if(todo.id === action.todo.id) {
              return action.todo;
            }
            return todo;
          })}
        } else {
          return list;
        }
      });
    }
    case 'newTodo': {
      return lists.map((list: List) => {
        if (list.id === action.listId) {
          const newTodos = [...list.todos]
          return {
            ...list,
            todos: [...newTodos, {id: nextId(newTodos), text: "", isActive: true}],
          }
        } else {
          return list;
        }
      });
    }
    case 'deleteTodo': {
      return lists.map((list: List) => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.filter(todo => todo.id !== action.todoId),
          }
        } else {
          return list;
        }
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}