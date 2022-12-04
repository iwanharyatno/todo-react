import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

import Root from './pages/Root.jsx'
import NotFinished from './pages/NotFinished.jsx'
import Finished from './pages/Finished.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import InputForm from './pages/InputForm.jsx'

import { action as inputAction } from './pages/InputForm.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "not-finished",
        element: <NotFinished />
      },
      {
        path: "finished",
        element: <Finished />
      },
      {
        path: 'add-todos',
        element: <InputForm />,
        action: inputAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
