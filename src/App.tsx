import { Typography } from './components/atoms/Typography';
import ListContainer from './components/organisms/ListContainer';
import ActiveLists from './components/templates/ActiveLists';
import './output.css'
import { TodosProvider } from './providers/todosProviders';

function App() {

  return (
    <>
      <TodosProvider>
        <ActiveLists>
          <div>
            <Typography variant="h1">My todo lists</Typography>
            <ListContainer />
          </div>
        </ActiveLists>
      </TodosProvider>
    </>
  )
}

export default App;
