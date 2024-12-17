import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {Provider}  from 'react-redux'
import router from './routers/router'
import { store  } from './redux/store';
import  'sweetalert2/dist/sweetalert2.js'
import './index.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider >
)
