import { routerType } from "../types/router.types";
import About from "./AboutPage";
import ContactPage from "./ContactPage";
import Home from "./HomePage";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import SearchPage from "./SearchPage";
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
    element: <ContactPage />,
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
    path:"search",
    element:<SearchPage/>,
    title:"search"
  },
  {
    path: "*",
    element: <div>Page not found</div>,
    title: "404"
  }
];

export default pagesData;