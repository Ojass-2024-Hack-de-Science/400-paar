import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Login from './Components/Login/Login.js';
import Registration from './Components/Registration/Registration.js';
import App from './App.js'

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/'>
      <Route path = "" element = {<App />}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "registration" element = {<Registration/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {routers}/>
  </React.StrictMode>
);

