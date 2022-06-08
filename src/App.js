import Clock from './components/Clock';
import Toggle from './components/Toggle';
import MonComposant from './components/MonComposantAEtat';
import './App.css';

function App() {
  return (
    <div className="App" style={{border: '2px solid green', padding: 20}}>
      <MonComposant/>
      <Toggle/>
      <Clock/>
    </div>
  );
}

export default App;
