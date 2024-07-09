import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

import './App.css'

function App() {
  return <RouterProvider router={router} />
}

export default App
