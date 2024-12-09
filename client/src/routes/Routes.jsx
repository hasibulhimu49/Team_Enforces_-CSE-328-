import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Components/Home/Home'
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import OrderSection from '../Components/OrderSection/OrderSection'
import MyCart from '../Components/MyCart/MyCart'
import Profile from '../Components/Profile/Profile'
import LocationPage from '../Components/LocationPage/LocationPage'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import CategoryPage from '../Components/AllTab/CategoryPage'
import Dashboard from '../Dashboard/Dashboard'
import DashboardPage from '../Dashboard/Admin/DashBoardPage/DashboardPage'
import Inventory from '../Dashboard/Admin/Inventory/Inventory'
import Settings from '../Dashboard/Admin/Settings/Settings'
import ManageProduct from '../Dashboard/Admin/ManageProduct/ManageProduct'
import Order from '../Dashboard/Admin/Order/Order'
import Users from '../Dashboard/Admin/Users/Users'
import Analytic from '../Dashboard/Admin/Analytic/Analytic'
import Promotion from '../Dashboard/Admin/Promotion/Promotion'
import Review from '../Dashboard/Admin/Review/Review'
import Reports from '../Dashboard/Admin/Reports/Reports'
import Shops from '../Dashboard/Users/Shops/Shops'
import MyUserCart from '../Dashboard/Users/MyUserCart/MyUserCart'
import MyOrder from '../Dashboard/Users/MyOrder/MyOrder'
import TrackOrder from '../Dashboard/Users/TrackOrder/TrackOrder'
import Support from '../Dashboard/Users/Support/Support'
import Refer from '../Dashboard/Users/Refer/Refer'
import Favorites from '../Dashboard/Users/Favorites/Favorites'
import AiImage from '../Components/AI image/AiImage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product',
        element: <SingleProduct />,
      },
      {
        path: '/order',
        element: <OrderSection />
      },
      {
        path: '/cart',
        element: <MyCart />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/location',
        element: <LocationPage />
      },
      {
        path: ':category',
        element: <CategoryPage />
      },
      {
        path: ':category/:subcategory',
        element: <CategoryPage />
      },
      {
        path: '/ai',
        element: <AiImage/>
      }


    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/dashboard/inventory',
        element: <Inventory />
      },
      {
        path: '/dashboard/Settings',
        element: <Settings />
      },
      {
        path: '/dashboard/manage-products',
        element: <ManageProduct />
      },
      {
        path: '/dashboard/orders',
        element: <Order />
      },
      {
        path: '/dashboard/users',
        element: <Users />
      },
      {
        path: '/dashboard/analytics',
        element: <Analytic />
      },
      {
        path: '/dashboard/promotions',
        element: <Promotion />
      },
      {
        path: '/dashboard/feedback',
        element: <Review />
      },
      {
        path: '/dashboard/reports',
        element: <Reports />
      },
      //from here user sidebar link 
      {
        path: '/dashboard/shops',
        element: <Shops />
      },
      {
        path: '/dashboard/cart',
        element: <MyUserCart />
      },
      {
        path:'/dashboard/myOrder',
        element: <MyOrder />
      },
      {
        path: '/dashboard/favorites',
        element: <Favorites/>
      },
      {
        path: '/dashboard/track-order',
        element: <TrackOrder />
      },
      {
        path: '/dashboard/support',
        element: <Support />
      },
      {
        path: '/dashboard/refer-friend',
        element: <Refer />
      },

    ]
  }
])
