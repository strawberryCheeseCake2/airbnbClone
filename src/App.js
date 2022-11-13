import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Header from './infrastructure/header/header.component';
import Beach from './routes/category/beach.component';
import AmazingViews from './routes/category/amazing-views.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to={"category=beach/"} />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        // index: true, 
        path: "category=beach/",
        element: <Beach />,
      },
      {
        path: "category=amazing-views/",
        element: <AmazingViews />,
      },
    ]
  },
]);

function App() {
  return (
    <div className='outer-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
