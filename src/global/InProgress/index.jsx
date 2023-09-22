import { Link } from "react-router-dom";


function InProgress() {
  return (
    <div className="h-full flex flex-col items-start sm:items-center justify-center gap-3 sm:gap-1 px-10 text-left sm:text-center">
      <p>Oop!</p>
      <p>This page is not quite ready yet, but our devs are working really hard on it</p>
      <p>Why don&#39;t you check out our other pages? You can start at <Link to="/" className="text-orchid-gl font-bold">home</Link></p>
    </div>
  )
}

export default InProgress