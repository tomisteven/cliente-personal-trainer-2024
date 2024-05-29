import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { HomePage } from '../components/Sections Pages/Home/HomePage'


const router= createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/videos',
        element: <div>Videos de mierda</div>
    }


])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}
