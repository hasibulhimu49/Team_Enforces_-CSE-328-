import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster position="top-center" richColors/>
    <RouterProvider router={router} />
  </AuthProvider>
)
