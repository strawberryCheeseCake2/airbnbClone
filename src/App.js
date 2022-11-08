import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Header from './components/header.component';

import Navigation from './routes/navigation/navigation.component';
import Beach from './routes/category/beach.component';
import AmazingViews from './routes/category/amazing-views.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "category/beach/",
        element: <Beach />,
      },
      {
        path: "category/amazing-views/",
        element: <AmazingViews />,
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
