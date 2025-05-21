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
          <br />
          <small>
            Project is{" "}
            <a
              href="https://github.com/anatol-coder/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-source
            </a>{" "}
            and available on GitHub.
          </small>
        </footer>
      </div>
    </div>
  );
}
