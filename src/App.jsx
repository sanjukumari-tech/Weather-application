
import {Routes, Route,Link} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import WeatherSearch from "./pages/WeatherSearch";
import Logout from "./pages/Logout";
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/Register" element = {<Register/>}/>
      <Route path = "/logout" element = {<Logout/>}/>
      <Route path = "/weatherSearch" element = {<WeatherSearch/>}/>
    </Routes>
      
    </>
  )
}

export default App
