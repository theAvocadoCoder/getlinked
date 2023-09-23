import { Outlet } from "react-router-dom";
import Navbar from "global/Navbar";

function Root() {
  return (
    <div className="h-screen flex flex-col font-montserrat bg-indigo-gl text-white [&_*]:[-webkit-tap-highlight-color:transparent]">
      <Navbar />
      <div className="h-full w-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default Root
