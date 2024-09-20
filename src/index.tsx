import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,BrowserRouter as Router,  Routes } from 'react-router-dom';
import '../src/css/index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);
