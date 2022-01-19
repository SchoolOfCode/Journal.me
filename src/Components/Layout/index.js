import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dayview">Daily Journal</Link>
          </li>
          <li>
            <Link to="/todolist">To-Do List</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
