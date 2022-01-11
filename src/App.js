import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <Link to='/homepage'><h1 className="web-title">Textbook Exchange 📖</h1></Link>
        <nav className="site-links">
          <Link to='/homepage'><button className="nav-btn">Homepage</button></Link>
          <Link to='/share'><button className="nav-btn">Share</button></Link>
          <Link to='/request'><button className="nav-btn">Request</button></Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@This is a student project made by Zikun Wang<br/>For more information please visit: <a href='https://github.com/zikunwang-terry'>https://github.com/zikunwang-terry</a></footer>
    </div>
  );
}

export default App;
