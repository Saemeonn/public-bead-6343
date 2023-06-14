import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Connectivity";
import Feeds from "../Feeds";
import Connectivity from "../Pages/Connectivity";
import Casestudies from "../Pages/Casestudies";
function AllRoutes() {
  return (
// {/* Add Home, Login and dashboard  */}
  <Routes>
    <Route path="/" element={<Home />} ></Route>
    <Route path="/profile" element={<Feeds />} ></Route>
    <Route path="/casestudies" element={<Casestudies />} ></Route>
    <Route path="/connect" element={<Connectivity />} ></Route>
  </Routes>
  )
}

export default AllRoutes;