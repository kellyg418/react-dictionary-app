import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="excited" />
        </main>
        <footer className="App-footer">
          This project was coded by Kelly Granados and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}
