import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import LandingPage from './pages/LandingPage'
import HeroPage from './pages/HeroPage'

const App = () => {
  const route = createBrowserRouter([
   {
    path:"",
    element:<HomeRoutes/>,
    children: [
      {path: "", element: <HeroPage/>}
    ]
   }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default App