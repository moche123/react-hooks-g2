import './App.css';
import UseCallback from './partials/useCallback';
import UseReducer from './partials/useReducer';
import UseRef from './partials/useRef';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <hr/>
        <UseRef />
        <hr />
        <UseCallback />
        <hr />
        <UseReducer />

    </div>
  );
}

export default App;
