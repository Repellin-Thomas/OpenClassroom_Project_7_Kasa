import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import reportWebVitals from './reportWebVitals';
import HouseComponent from './pages/House';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/thomas",
    element: <div>
      <Header />
      <Slider />
    </div>

  },

  {
    path: "/à-propos",
    element: <About />
  },

  {
    path: "/*",
    element: <ErrorPage />
  },

  {
    path: "/fiche-logement/:id",
    element: <HouseComponent />
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
