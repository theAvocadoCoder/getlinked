import { Link } from "react-router-dom";
import Navbar from "global/Navbar";


function _404() {
  return (
    <div className="h-screen flex flex-col font-montserrat bg-indigo-gl text-white">
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center">
        <p>Uh oh!</p>
        <p>That page does not exist here, or perhaps it was misspelled...</p>
        <p>No matter, you can always find your way back <Link to="/" className="text-orchid-gl font-bold">home</Link></p>
      </div>
    </div>
  )
}

export default _404