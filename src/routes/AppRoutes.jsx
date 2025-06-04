import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginPage from '../features/auth/components/LoginPage'
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'
import PrivateRoutes from './PrivateRoutes'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ],
  {
    basename: "/openMetadata",
  }
);

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes