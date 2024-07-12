import { createContext, useContext, useReducer } from 'react';

const TodosContext = createContext(null);

const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialLists
  );

  return (
    <TodosContext.Provider value={tasks}>
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

function tasksReducer(lists, action) {
  switch (action.type) {
    case 'addList': {
      return [...lists, {
        id: action.id,
        title: action.title,
        todos: []
      }];
    }
    case 'changeList': {
      return lists.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleteList': {
      return lists.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialLists = [
  {id: 4, title: "First list", todos: [
    {id: 1, text: "My todo 1", isActive: true},
    {id: 2, text: "My todo 2", isActive: true},
    {id: 3, text: "My todo 3", isActive: false},
  ]},
]