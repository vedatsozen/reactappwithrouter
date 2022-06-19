import { Outlet, Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/references">References</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;
