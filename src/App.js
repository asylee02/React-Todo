import logo from './logo.svg';
import './App.css';
import { DarkModeProvider, FilterProvider } from '../../project/src/context/FilterContext'
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <FilterProvider>
      <div id='all'>
      <TodoList/>
      </div>
    </FilterProvider>
  );
}

export default App;
