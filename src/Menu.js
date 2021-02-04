import logo from './dawdler-logo.png';
import './Menu.css';

function App() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ul>
          <li>Our story</li>
          <li>Get in touch</li>
      </ul>
    </div>
  );
}

export default App;