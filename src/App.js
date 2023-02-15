import logo from './logo.svg';
import './App.css';
import Children from "./components/children";
import Parent from "./components/parent";
import store from "./redux";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Children/>
        <Parent/>
        <span>{store.getState().data}</span>
      </header>
    </div>
  );
}

export default App;
