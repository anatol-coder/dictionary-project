import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Dictionary defaultKeyWord={"sunrise"} />
        <footer className="App-footer">
          <small> Coded by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}
