import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary defaultKeyWord={"sunrise"} />
      <footer className="App-footer">
        <small> Coded by SheCodes</small>
      </footer>
    </div>
  );
}

export default App;
