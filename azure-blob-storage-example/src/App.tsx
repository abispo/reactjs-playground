import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ListFiles from './components/ListFiles';

function App() {
  return (
    <div className="App">
      <h1>React Azure Blob Storage Example</h1>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="list-files" element={ <ListFiles />} />
      </Routes>
    </div>
  );
}

export default App;
