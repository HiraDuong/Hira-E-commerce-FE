import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "about",
    element: <About />,
    title: "about"
  },
  {
    path: "contact",
    element: <div>Contact</div>,
    title: "contact"
  },{
    path:"login",
    element:<Login/>,
    title:"login"
  },
  {
    path:"register",
    element:<Register/>,
    title:"register"
  },
  {
    path: "*",
    element: <div>Page not found</div>,
    title: "404"
  }
];

export default pagesData;