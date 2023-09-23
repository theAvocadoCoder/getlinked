import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "global/Button";
import logo from "assets/getlinked.svg";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSideBar() {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isSidebarOpen
        ? "unset"
        : "hidden";
      setIsSidebarOpen(state => !state);
    }
  }

  const path = useLocation().pathname;

  return (
    <nav className="flex fixed top-0 left-0 bg-indigo-gl/70 [-webkit-backdrop-filter:blur(.75rem)] [backdrop-filter:blur(.75rem)] items-center w-full justify-between px-12 lg:px-16 xl:px-32 pt-[1.875rem] pb-[1.44rem] lg:pt-[4.1875rem] z-10 border-b border-b-slate-100/30">
      <Link to="/">
        <img src={logo} alt="" className={`${isSidebarOpen ? "hidden lg:block" : ""} h-[.937rem] lg:h-[2.25rem]`} />
      </Link>

      <button type="button" className={`w-[1.1875rem] h-[.875rem] bg-[url('assets/burger.svg')] bg-contain bg-no-repeat flex justify-center items-center text-center p-0 lg:hidden`} aria-label="Open Menu" onClick={toggleSideBar} />
      
      <div className={`fixed flex flex-col justify-center gap-10 w-screen h-screen px-16 md:px-32 md:text-[1.5rem] top-0 left-0 font-medium lg:text-[1.125rem] 2xl:text-[1.75rem] lg:w-[min(68%,40rem)] xl:w-[min(65%,58rem)] lg:h-fit lg:flex-row lg:gap-0 lg:justify-end lg:static lg:p-0 ${isSidebarOpen ? "flex bg-indigo-gl lg:bg-transparent" : "hidden lg:flex"}`}>
        <button type="button" className={`w-[1.4375rem] md:w-8 md:h-8 h-[1.4375rem] bg-[url('assets/exit.svg')] bg-contain bg-no-repeat flex justify-center items-center text-center p-0 lg:hidden absolute top-[2.4375rem] right-[2.4375rem] md:top-14 md:right-14`} aria-label="Close Menu" onClick={toggleSideBar} />

        <ul className="flex flex-col lg:flex-row gap-10 items-start lg:items-center w-fit">
          {["Timeline", "Overview", "FAQs", "Contact"].map((item, idx) => {
              const route = item.toLowerCase();
              return (
                <li key={idx}>
                  <NavLink to={`/${route}`}
                    className={({ isActive }) => (
                      isActive
                        ? "bg-gradient-gl [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-bold"
                        : ""
                    )}
                    onClick={toggleSideBar}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            })}

            <Link to="/register">
              {path == "/register" 
                ? (
                  <div className="w-fit bg-gradient-to-b from-[#9A39FF] to-[#FF29B9] p-[2px] rounded-sm">
                    <Button className=" px-[46px] py-[10px] bg-indigo-gl"
                    clickHandler={toggleSideBar}>Register</Button>
                  </div>
                )
                : (
                  <Button clickHandler={toggleSideBar}>Register</Button>
                )}
            </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar