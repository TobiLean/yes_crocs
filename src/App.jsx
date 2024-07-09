import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

export const router = createBrowserRouter([
  {
    path: "./pages/Home",
    element: <Home />
  },
  {
    path: "./pages/cart",
    element: <Cart />
  },
  {
    path: "./pages/checkout",
    element: <Checkout />
  },
])

import './App.css';

function App() {
  return <RouterProvider router={router} />
}

export default App
