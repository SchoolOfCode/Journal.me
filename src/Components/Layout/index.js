import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
 
      <nav className="menu">
        <ul className="menu-items">
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


      <Outlet/>

      <div className="navbar">
      <span className = "link">
      <button id= "link1"
      href="https://vimeo.com/showcase/soc-national" >
        Vimeo
      </button> 

      <button id= "link2" 
      href="https://www.notion.so/" >
        Notion
      </button> 

      <button id= "link3" 
      href="https://zoom.us/signin" >
        Zoom
      </button> 
      </span>

      <footer>
        <p3>Created by:</p3><br/>
          <p4>Callum Hemming</p4><br/>
          <p4>Samira Midgley</p4><br/>
          <p4>Najma Elmi</p4><br/>
          <p4>Tan Coding</p4><br/>
        <p3><strong>Copyright@NascarTanTeam</strong></p3>
      </footer>

      </div>
    </>
  );
};

export default Layout;
