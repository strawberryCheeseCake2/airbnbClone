import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Header from "./infrastructure/header/header.component";
import RoomsScreen from "./features/rooms/screens/rooms-screen.component";
import WishlistScreen from "./features/wishlists/screens/wishlist-screen.compoent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to={`category=0/`} />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        path: "category=:id/",
        element: <RoomsScreen />,
      },
    ],
  },
  {
    path: "wishlist/",
    element: <WishlistScreen />,
  },
]);

function App() {
  return (
    <div className="outer-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
