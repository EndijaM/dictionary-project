import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <main>
            <Dictionary defaultKeyword="mountain" />
          </main>
          <footer className="text-center text-muted pb-3">
            This is an open-sourced code on
            <a
              href="https://github.com/EndijaM/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
            and hosted on
            <a
              href="https://gleaming-palmier-a091bc.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify{" "}
            </a>
            ,
            <br />
            coded with ❤️ by Endija Mathur
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
