import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        This project was coded by Kelly Granados and is open-sourced on GitHub
      </footer>
    </div>
  );
}
