import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/cart.jsx'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { getTotalCart } from './store/slice/cart-slice.js'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement: <h2>Page does not exist</h2>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  }
])

store.dispatch(getTotalCart())

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
