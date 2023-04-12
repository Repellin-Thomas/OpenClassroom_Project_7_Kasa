import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';




/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/thomas",
    element: <div>
      <Header />

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
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
