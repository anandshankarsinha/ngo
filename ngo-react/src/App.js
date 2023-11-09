import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={appRouter} />
      <Footer/>
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
    ],
  },
]);
export default App;
