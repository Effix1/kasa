// import des link react-router-dom
import Home from './pages/Homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    index : true,
    element : <Home/>
  },
])




export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


