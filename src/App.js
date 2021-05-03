import './App.css';
import Navbar from './components/navbar';
import Ethermine from './components/ethermine';
import CoolMine from './components/coolmine';
import LitecoinPool from './components/ltcpool';

function App() {
  return (
    <div id="app" className="container-fluid w-100">
      <Navbar/>
      <Ethermine/>
      <CoolMine/>
      <LitecoinPool/>
    </div>
  );
}

export default App;
