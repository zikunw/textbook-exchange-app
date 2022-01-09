import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="web-title">Textbook Exchange 📖</h1>
        <nav className="site-links">
          | {" "}
          <Link to='/homepage'>Homepage</Link> | {" "}
          <Link to='/share'>Share</Link> | {" "}
          <Link to='/request'>Request</Link> | {" "}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@This is a student project made by Zikun Wang</footer>
    </div>
  );
}

export default App;
