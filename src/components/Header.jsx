import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
      <div className="top-image">
        <header>
          <nav>
            <h1>Router</h1>
            
          </nav>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default Header;
