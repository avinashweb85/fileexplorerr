import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import { explorer } from './data/folderData';

function App() {
  return (
    <div className="App">
      <Folder data={explorer}/>
    </div>
  );
}

export default App;
