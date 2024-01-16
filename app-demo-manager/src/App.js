import './App.css';
import Maincontent from './components/Maincontent/MainContent';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Maincontent/>
      <ToastContainer />
    </div>
  );
}

export default App;
