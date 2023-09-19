import { Link, Outlet } from "react-router-dom";

function Root() {

  return (
    <>
      <p className="font-montserrat">Root</p>
      <ul className="flex mx-auto gap-5 px-5 font-montserrat">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <div className="font-montserrat">
        <Outlet />
      </div>
    </>
  )
}

export default Root
