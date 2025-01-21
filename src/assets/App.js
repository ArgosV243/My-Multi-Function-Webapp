//import logo from './logo.svg';
import '../styles/App.css';
import Header from '../components/Header.js';
import Nav from '../components/Nav.js';
import Content from '../components/Content.js';
import WeatherWidget from '../components/WeatherWidget.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Header/>
      </header>
      <nav className="App-nav">
        <Nav/>
      </nav>
        <div class="App-parallax">
      <main className="App-content">
        <Content/>
        <WeatherWidget/>
      </main>
      </div>
    </div>
  );
}

export default App;
