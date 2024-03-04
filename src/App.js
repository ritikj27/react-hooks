import logo from './logo.svg';
import './App.css';
import MemoHook from './components/MemoHook';
import RefHook from './components/RefHook';
import ReducerHook from './components/ReducerHook';
import TodoReducer from './components/TodoReducer';
import CallbackHook from './components/useCallback/CallbackHook';

function App() {
  return (
    <div className="App">
     {/* <MemoHook/> */}
     {/* <RefHook /> */}
     {/* <ReducerHook/> */}
     {/* <TodoReducer /> */}
     <CallbackHook/>
    </div>
  );
}

export default App;
