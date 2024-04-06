import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Registration from './Components/Registration/Registration.js';
import App from './App.js';
import Configure from './Components/Specs/Configure.js';
import Featured from './Components/Games/Featured.js';
import GetAccess from './Components/Access/GetAccess.js';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<App />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='gamespace' element={<Configure />} />
      <Route path='features' element={<Featured />} />
      <Route path='access' element={<GetAccess />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);


