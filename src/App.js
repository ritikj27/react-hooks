import logo from './logo.svg';
import './App.css';
import MemoHook from './components/MemoHook';
import RefHook from './components/RefHook';
import ReducerHook from './components/ReducerHook';
import TodoReducer from './components/TodoReducer';
import CallbackHook from './components/useCallback/CallbackHook';
import TransitionHook from './components/useTransition/TransitionHook';
import DeferredValueHook from './components/useDeferedValue/DeferredValueHook';
import LayoutEffectHook from './components/useLayout/LayoutEffectHook';
import ImperativeHook from './components/useImperative/ImperativeHook';

function App() {
  return (
    <div className="App">
     {/* <MemoHook/> */}
     {/* <RefHook /> */}
     {/* <ReducerHook/> */}
     {/* <TodoReducer /> */}
     {/* <CallbackHook/> */}
     {/* <TransitionHook/> */}
     {/* <DeferredValueHook/>  */}
     {/* <LayoutEffectHook/> */}
     <ImperativeHook />
    </div>
  );
}

export default App;
