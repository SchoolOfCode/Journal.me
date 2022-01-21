import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-items">
          <li>
            <Link to="/" className="btn">
              {" "}
              {/* className="Home_nav_bar_font" */} Home 🏠{" "}
            </Link>
          </li>
          <li>
            <Link to="/dayview" className="btn">
              {" "}
              {/* className="DayView_nav_bar_font */}
              Daily Journal 📓{" "}
            </Link>
          </li>
          <li>
            <Link to="/todolist" className="btn">
              {" "}
              {/* To_Do_List_nav_bar */}
              To-Do List 📋{" "}
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <div className="navbar">
        <span className="link">
          <button id="link1" href="https://vimeo.com/showcase/soc-national">
            Vimeo
          </button>

          <button id="link2" href="https://www.notion.so/">
            Notion
          </button>

          <button id="link3" href="https://zoom.us/signin">
            Zoom
          </button>
        </span>

        {/* <footer>
          <p5>Created by:</p5>
          <p6>Callum Hemming, Samira Midgley, Najma Elmi, Tan Coding</p6>
          <p10>
            <strong>Copyright@NascarTanTeam</strong>
          </p10>
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
