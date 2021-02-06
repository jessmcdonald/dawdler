import logo from './assets/dawdler-logo.png';
import './App.scss';
import Menu from './components/Menu/Menu';
import HomeGrid from './components/HomeGrid/HomeGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu></Menu>
      </header>
      <div className="Home-Blocky">
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
        <div className="block4"></div>
        <div className="block5"></div>
        <div className="block6"></div>
        <HomeGrid></HomeGrid>
      </div>
    </div>
  );
}

export default App;
