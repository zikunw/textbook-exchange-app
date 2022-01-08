import BookCardContainer from "./components/book-card-container";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Textbook Exchange</h1>
        <nav>
          | {" "}
          <Link to='/homepage'>Homepage</Link> | {" "}
          <Link to='/share'>Share</Link> | {" "}
          <Link to='/request'>Request</Link> | {" "}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@Zikun Wang</footer>
    </div>
  );
}

export default App;
