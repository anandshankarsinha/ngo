import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import WhatWeDo from "./Components/Whatwedo/WhatWeDo";
import Media from "./Components/Media/Media";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/whatwedo",
        element: <WhatWeDo />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default App;
