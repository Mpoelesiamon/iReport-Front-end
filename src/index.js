import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero';
import Authentication from './components/Authentication';
import Report from './components/Report';
import RedFlag from './components/RedFlag';
import Intervention from './components/Intervention';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import About from './components/About';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/home", element: <Hero />},
  {path: "/signup", element: <Authentication />},
  {path: "/report", element: <Report />},
  {path: "/red-flag", element: <RedFlag />},
  {path: "/intervention", element: <Intervention />},
  {path: "/contact", element: <Contact />},
  {path: "/about", element: <About />},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={2000} pauseOnHover={false} newestOnTop={false} pauseOnFocusLoss={false} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();