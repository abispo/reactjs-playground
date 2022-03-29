import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ListFiles from './components/ListFiles';
import UploadFile from './components/UploadFile';

function App() {
  return (
    <div className="App">
      <h1>React Azure Blob Storage Example</h1>
      <hr />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='upload-file' element={ <UploadFile /> } />
        <Route path="list-files" element={ <ListFiles /> } />
      </Routes>
    </div>
  );
}

export default App;
