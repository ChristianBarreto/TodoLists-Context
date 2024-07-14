import ListContainer from './components/organisms/ListContainer';
import ActiveLists from './components/templates/ActiveLists';
import './output.css'
import { TodosProvider } from './providers/todosProviders';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

function App() {

  return (
    <>
      <TodosProvider>
        <ActiveLists>
          <div>
            <Header />
            <ListContainer />
            <Footer />
          </div>
        </ActiveLists>
      </TodosProvider>
    </>
  )
}

export default App;
