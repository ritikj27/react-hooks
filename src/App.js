import logo from './logo.svg';
import './App.css';
import MemoHook from './components/MemoHook';
import RefHook from './components/RefHook';
import ReducerHook from './components/ReducerHook';
import TodoReducer from './components/TodoReducer';

function App() {
  return (
    <div className="App">
     {/* <MemoHook/> */}
     {/* <RefHook /> */}
     {/* <ReducerHook/> */}
     <TodoReducer />
    </div>
  );
}

export default App;
