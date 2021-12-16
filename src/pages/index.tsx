import { useRoutes } from "react-router-dom";
import Main from "./Main";

const Pages = () => useRoutes([
  { path: "/", element: <Main /> },
])

export default Pages;