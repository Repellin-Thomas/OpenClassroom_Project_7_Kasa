import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Tag from './components/Tag';
import Baner from './components/Baner';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/thomas",
    element: <div>
      <Header />
      <Baner/>
      <Tag/>
    </div>

  },

  {
    path: "/à-propos",
    element: <About />
  },

  {
    path: "/error",
    element: <ErrorPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
