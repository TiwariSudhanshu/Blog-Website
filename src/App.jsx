import { Router } from "react-router-dom"
import Topbar from "./components/upbar/upbar"
import Home from "./pages/home/home"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Settings from "./pages/settings/settings"
import Single from "./pages/single/single"
import Write from "./pages/write/write"
function App() {

  return (
    <Router>
     <Topbar/>
     <Register/>
    </Router>
  )
}

export default App
