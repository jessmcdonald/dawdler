import logo from './dawdler-logo.png';
import './App.scss';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Noun.	dawdler - someone who takes more time than necessary
        </p>
      </header>
      <div></div>
      <Menu></Menu>
    </div>
  );
}

export default App;
