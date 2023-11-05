import { useReducer } from 'react';
import './App.css';
import Main from './Main';
import { ModalContext } from './context';

function App() {

  const [modal, modalDispatch] = useReducer();
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
