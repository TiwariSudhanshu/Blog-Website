import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Topbar from "./components/upbar/upbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'register',
      element: <Register/>
    },
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'write',
      element: <Write/>
    },
    {
      path: 'settings',
      element: <Settings/>
    },
    {
      path: 'single',
      element: <Single/>
    }
  ]);

  return (
    <>
      <Topbar/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
