import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import App from './App';
import Articles from './routes/articles';
import Invoices from './routes/brands';
import reportWebVitals from './reportWebVitals';
import Brands from './routes/brands';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="articles" element={<Articles />} />
        <Route path="brands" element={<Brands />} />
        <Route path="*" element={
          <main style={{ padding: "1rem"}}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
