import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'

const Inicio = lazy(() => import("./pages/Inicio"))
const Simulador = lazy(() => import("./pages/Simulador"))
const Contacto = lazy(() => import("./pages/Contacto"))
const Nosotros = lazy(() => import("./pages/Nosotros"))
const Privacidad = lazy(() => import("./pages/Privacidad"))
const Testimonios = lazy(() => import("./pages/Testimonios"))
const Servicios = lazy(() => import("./pages/Servicios"))

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/testimonios',
        element: <Testimonios />
      },
      {
        path: '/privacidad',
        element: <Privacidad />
      },
      {
        path: '/nosotros',
        element: <Nosotros />
      },
      {
        path: '/simulador',
        element: <Simulador />
      },
      {
        path: '/servicios',
        element: <Servicios />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
</React.StrictMode>
)
