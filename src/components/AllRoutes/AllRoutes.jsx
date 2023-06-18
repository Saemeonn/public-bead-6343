import { Routes, Route } from "react-router-dom";
import Feeds from "../Feeds";
import Connectivity from "../Pages/Connectivity";
import Casestudies from "../Pages/Casestudies";
import Home from "../Pages/Home";
import SingleCasestudies from "../Pages/SingleCasestudies";
import PrivateRoute from "./Private";
function AllRoutes() {
  return (
    // {/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/profile" element={<Feeds />} ></Route>
      <Route path="/casestudies" element={
        <PrivateRoute>
          <Casestudies />
        </PrivateRoute>
      } ></Route>
      <Route path="/singlecasestudies/:id" element={
        <PrivateRoute>
          <SingleCasestudies />
        </PrivateRoute>
      } ></Route>
      <Route path="/connect" element={
        <PrivateRoute>
          <Connectivity />
        </PrivateRoute>
      } ></Route>
    </Routes>
  )
}

export default AllRoutes;