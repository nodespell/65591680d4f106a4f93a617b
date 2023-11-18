import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <div className="bg-indigo-500">
  Deployment testing
</div>
}

export default function App() {
  return <RouterProvider router={router} />
}