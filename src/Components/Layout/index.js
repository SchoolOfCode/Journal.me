import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-bar-items">
          <li>
            <Link to="/" className="Home_nav_bar_font">
              {" "}
              Home 🏠{" "}
            </Link>
          </li>
          <li>
            <Link to="/dayview" className="DayView_nav_bar_font">
              Daily Journal 📓{" "}
            </Link>
          </li>
          <li>
            <Link to="/todolist" className="To_Do_List_nav_bar">
              To-Do List 📋{" "}
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
