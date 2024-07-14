import { useTodosDispatch } from "../../../providers/todosProviders";

export default function Header() {
  const dispatch = useTodosDispatch();

  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold py-6">My to-do lists</h1>
          <p className="py-6"><span className="font-bold">Never forget your commitment with My to-do list.</span><br/>Create new lists and add your your tasks, check then to mark as completed, delete and create again.</p>
          <button className="btn btn-primary" onClick={() => dispatch({type: 'addList'})}>Add new todo list</button>
        </div>
      </div>
    </div>
  )
}