import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Authentication from './components/Authentication';
import Report from './components/Report';
import RedFlag from './components/RedFlag';
import Admin from './components/Admin';
import Profile from './components/Profile';
import ViewReport from './components/ViewReport';
import Intervention from './components/Intervention';
import Settings from './components/Settings';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Hero /> },
  { path: "/signup", element: <Authentication /> },
  { path: "/createreport", element: <Report /> },
  { path: "/red-flag", element: <RedFlag /> },
  { path: "/admin", element: <Admin /> },
  { path: "/profile", element: <Profile /> },
  { path: "/viewReport", element: <ViewReport /> },
  { path: "/intervention", element: <Intervention /> },
  { path: "/settings", element: <Settings />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
