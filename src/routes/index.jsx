import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { HomePage } from '../components/Sections Pages/Home/HomePage'
import { VideosYTips } from '../components/Sections Pages/VideosyTips/VideosYTips'


const router= createBrowserRouter([
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/Videos-Y-Tips',
        element: <VideosYTips/>
    }


])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}
