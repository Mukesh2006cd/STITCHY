import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './layout.jsx'
import LoginPage from './components/login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />,
    }]
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

