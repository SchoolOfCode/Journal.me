import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">ToDoList</Link>
          </li>
          <li>
            <Link to="/dayview">Day view</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
