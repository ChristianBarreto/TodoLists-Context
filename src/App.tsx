import ListContainer from './components/organisms/ListContainer';
import ActiveLists from './components/templates/ActiveLists';
import './output.css'
import { TodosProvider } from './providers/todosProviders';

function App() {

  return (
    <>
      <TodosProvider>
        {/* This is a single page application, but in case we have more pages
          here we can easily implement it using react router dom, the ActiveLists
          template will display the header, footer, breadcrumbs for all pages.
        */}
        <ActiveLists>
          <ListContainer />
        </ActiveLists>
      </TodosProvider>
    </>
  )
}

export default App;
