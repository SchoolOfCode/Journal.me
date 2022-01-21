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
          
        </ul>
      </nav>

      <Outlet />

      <div className="navbar">

      <span className = "link">

        <a href="https://vimeo.com/showcase/soc-national">
        <button id= "link1"  >
      Vimeo
      </button> 

        </a>
   
        <a href="https://www.notion.so/">
      <button id= "link2" >
      Notion
      </button> 
      </a>



      <a href="https://zoom.us/signin">
      <button id= "link3"  >
      Zoom
      </button>
      </a> 
      </span>

      <footer>
        <p>Created by:</p><br/>
        <p>Callum Hemming</p><br/>
        <p>Samira Midgley</p><br/>
        <p>Najma Elmi</p><br/>
        <p>Tan Coding</p><br/>
        
        <p><strong>Copyright@NascarTanTeam</strong></p>
      </footer>


      </div>
    </>
  );
};

export default Layout;
