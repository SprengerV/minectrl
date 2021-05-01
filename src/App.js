import './App.css';
import Navbar from './components/navbar';
import Ethermine from './components/ethermine'
import LitecoinPool from './components/ltcpool';

function App() {
  return (
    <div id="app">
      <Navbar/>
      <Ethermine/>
      {/*<LitecoinPool/>*/}
    </div>
  );
}

export default App;
