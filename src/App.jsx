import './App.css';
import UseCallback from './partials/useCallback';
import UseReducer from './partials/useReducer';
import UseRef from './partials/useRef';
import { Routes, Route, Link } from "react-router-dom";
import Presentation from './components/Presentation';


function App() {
  return (
    <div className="App">
        <nav>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/callback'>UseCallback</Link>
          <Link className='link' to='/reducer'>UseReducer</Link>
          <Link className='link' to='/ref'>UseRef</Link>
        </nav>

        <h1>Hello</h1>

        <Routes>
          <Route path='/ref' element={ <UseRef /> } />
          <Route path='/reducer' element={ <UseReducer /> } />
          <Route path='/callback' element={ <UseCallback /> } />
          <Route path='/' element={ <Presentation /> } />
        </Routes>

        {/* <h1>Hello</h1>
        <hr/>
        <UseRef />
        <hr />
        <UseCallback />
        <hr />
        <UseReducer /> */}

    </div>
  );
}

export default App;
