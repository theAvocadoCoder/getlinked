import { Outlet, useLocation } from "react-router-dom";
import Navbar from "global/Navbar";
import Footer from "global/Footer";

function Root() {
  const path = useLocation().pathname;

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-indigo-gl text-white [&_*]:[-webkit-tap-highlight-color:transparent]">
      <Navbar />
      <div className="min-h-[calc(100vh-6.937rem)] sm:min-h-[calc(100vh-8.25rem)] h-full flex items-center justify-center overscroll-y-scroll">
        <Outlet />
      </div>
      {path == "/" && (<Footer />)}
    </div>
  )
}

export default Root
