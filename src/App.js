import logo from './dawdler-logo.png';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Noun	1.	dawdler - someone who takes more time than necessary
        </p>
      </header>
      <Menu></Menu>
    </div>
  );
}

export default App;
